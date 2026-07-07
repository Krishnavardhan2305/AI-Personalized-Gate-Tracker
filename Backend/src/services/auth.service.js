import authRepository from "../repositories/auth.repository.js";

import ApiError from "../utils/ApiError.js";

import {
    hashPassword,
    comparePassword
} from "../utils/password.js";

import {
    generateAccessToken,
    generateRefreshToken
} from "../utils/jwt.js";

import { sanitizeUser } from "../utils/user.js";

class AuthService {

    async signup(data) {

        const {
            email,
            password,
            gateTargetYear
        } = data;

        const existingUser =
            await authRepository.findUserByEmail(email);

        if (existingUser) {
            throw new ApiError(
                409,
                "Email already exists"
            );
        }

        const hashedPassword =
            await hashPassword(password);

        const user =
            await authRepository.createUser({
                email,
                password: hashedPassword,
                gateTargetYear
            });

        const accessToken =
            generateAccessToken(user.id);

        const refreshToken =
            generateRefreshToken(user.id);

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

    async login(data) {

        const {
            email,
            password
        } = data;

        const user =
            await authRepository.findUserByEmail(email);

        if (!user) {
            throw new ApiError(
                401,
                "Invalid email or password"
            );
        }

        const passwordMatched =
            await comparePassword(
                password,
                user.password
            );

        if (!passwordMatched) {
            throw new ApiError(
                401,
                "Invalid email or password"
            );
        }

        const accessToken =
            generateAccessToken(user.id);

        const refreshToken =
            generateRefreshToken(user.id);

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

}

export default new AuthService();