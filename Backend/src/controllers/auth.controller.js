import asyncHandler from "../utils/asyncHandler.js";
import authService from "../services/auth.service.js";
import cookieOptions from "../config/cookie.js";
export const signup = asyncHandler(async (req, res) => {
    const result = await authService.signup(req.validatedData);
    return res.status(201).json({
        success: true,
        message: result.message
    });
});
export const login = asyncHandler(async (req, res) => {
    const { user, accessToken, refreshToken } = await authService.login(req.validatedData);
    res.cookie("refreshToken", refreshToken, cookieOptions).status(200).json
        ({
            success: true,
            message: "Login successful",
            data:
            {
                user,
                accessToken
            }
        });

});
export const verifyEmail = asyncHandler(
    async (req, res) => {
        await authService.verifyEmail(
            req.validatedData
        );
        return res.status(200).json({
            success: true,
            message:"Email verified successfully."
        });
    }
);
export const forgotPassword = asyncHandler(async (req, res) => {
    await authService.forgotPassword(req.validatedData);
    return res.status(200).json({
        success: true,
        message: "OTP sent successfully"
    });
});
export const resetPassword = asyncHandler(async (req, res) => {
    await authService.resetPassword(req.validatedData);
    return res.status(200).json({
        success: true,
        message: "Password reset successfully"
    });
});