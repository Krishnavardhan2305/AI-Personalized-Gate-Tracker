import asyncHandler from "../utils/asyncHandler.js";
import authService from "../services/auth.service.js";
import cookieOptions from "../config/cookie.js";
export const signup = asyncHandler(async (req, res) => 
{
    const {user,accessToken,refreshToken} = await authService.signup(req.validatedData);
    res.cookie("refreshToken",refreshToken,cookieOptions).status(201).json
    ({
        success: true,
        message: "Signup successful",
        data: 
        {
            user,
            accessToken
        }
    });
});
export const login = asyncHandler(async (req, res) => 
{
    const {user,accessToken,refreshToken} = await authService.login(req.validatedData);
    res.cookie("refreshToken",refreshToken,cookieOptions).status(200).json
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