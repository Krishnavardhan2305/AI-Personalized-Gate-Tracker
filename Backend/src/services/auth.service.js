import authRepository from "../repositories/auth.repository.js";
import ApiError from "../utils/ApiError.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
import { sanitizeUser } from "../utils/user.js";
import { generateOTP } from "../utils/otp.js";
import { sendOTPEmail, sendVerificationEmail } from "../utils/mail.js";
import { OTPType } from "@prisma/client";
import bcrypt from "bcrypt";
class AuthService {
    async signup(data) {
        const { email, password, gateTargetYear } = data;
        const existingUser = await authRepository.findUserByEmail(email);
        if (existingUser) {
            throw new ApiError(
                409,
                "Email already exists"
            );
        }
        const hashedPassword = await hashPassword(password);
        const user = await authRepository.createUser({
            email,
            password: hashedPassword,
            gateTargetYear
        });
        const otp = generateOTP();
        const hashedOTP = await bcrypt.hash(otp, 10);
        await authRepository.createOTP
            (
                user.id,
                hashedOTP,
                OTPType.EMAIL_VERIFICATION,
                new Date(Date.now() + 10 * 60 * 1000)
            );
        await sendVerificationEmail(
            user.email,
            otp
        );
        return {
            message: "Account created successfully. Please verify your email and login."
        };

    }
    async verifyEmail(data) {
        const { email, otp } = data;
        const user = await authRepository.findUserByEmail(email);
        if (!user) {
            throw new ApiError(
                404,
                "User not found"
            );
        }
        const savedOTP = await authRepository.findLatestOTP(
            user.id,
            OTPType.EMAIL_VERIFICATION
        );
        if (!savedOTP) {
            throw new ApiError(
                400,
                "OTP not found"
            );
        }
        if (savedOTP.expiresAt < new Date()) {
            await authRepository.deleteOTP(savedOTP.id);
            throw new ApiError(
                400,
                "OTP expired"
            );
        }
        const validOTP = await bcrypt.compare(
            otp,
            savedOTP.otp
        );
        if (!validOTP) {
            throw new ApiError(
                400,
                "Invalid OTP"
            );
        }
        await authRepository.verifyEmail(user.id);
        await authRepository.deleteOTP(savedOTP.id);
    }

    async login(data) {
        const { email, password } = data;
        const user = await authRepository.findUserByEmail(email);
        if (!user) {
            throw new ApiError(
                401,
                "Invalid email or password"
            );
        }
        if (!user.emailVerified) {
            throw new ApiError(
                403,
                "Please verify your email first."
            );
        }
        const passwordMatched = await comparePassword
            (
                password,
                user.password
            );
        if (!passwordMatched) {
            throw new ApiError(
                401,
                "Invalid email or password"
            );
        }
        const accessToken = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id);
        await authRepository.saveRefreshToken(
            user.id,
            refreshToken,
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        );
        return {
            user: sanitizeUser(user),
            accessToken,
            refreshToken
        };
    }
    async forgotPassword(data) {
        const { email } = data;
        const user = await authRepository.findUserByEmail(email);
        if (!user) {
            throw new ApiError(
                404,
                "User not found"
            );
        }
        const otp = generateOTP();
        const hashedOTP = await bcrypt.hash(otp, 10);
        await authRepository.deleteOldOTPs(
            user.id,
            OTPType.PASSWORD_RESET
        );
        await authRepository.createOTP(
            user.id,
            hashedOTP,
            OTPType.PASSWORD_RESET,
            new Date(Date.now() + 10 * 60 * 1000)
        );
        await sendOTPEmail(
            email,
            otp
        );
        return {
            message: "OTP sent successfully"
        };
    }
    async resetPassword(data) {
        const { email, otp, password } = data;
        const user = await authRepository.findUserByEmail(email);
        if (!user) {
            throw new ApiError(
                404,
                "User not found"
            );
        }
        const savedOTP = await authRepository.findLatestOTP(
            user.id,
            OTPType.PASSWORD_RESET
        );
        if (!savedOTP) {
            throw new ApiError(
                400,
                "OTP not found"
            );
        }
        if (savedOTP.expiresAt < new Date()) {
            await authRepository.deleteOTP(
                savedOTP.id
            );
            throw new ApiError(
                400,
                "OTP expired"
            );
        }
        const validOTP = await bcrypt.compare(otp, savedOTP.otp);
        if (!validOTP) {
            throw new ApiError(
                400,
                "Invalid OTP"
            );
        }
        const hashedPassword = await hashPassword(password);
        await authRepository.updatePassword(
            user.id,
            hashedPassword
        );
        await authRepository.deleteRefreshTokens(
            user.id
        );
        await authRepository.deleteOTP(

            savedOTP.id

        );
        return {
            message: "Password reset successful"
        };
    }
}

export default new AuthService();