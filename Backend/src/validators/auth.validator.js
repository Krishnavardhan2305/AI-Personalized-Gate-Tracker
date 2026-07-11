import { z } from "zod";

export const signupSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password is too long"),

    gateTargetYear: z
        .number()
        .int()
        .min(new Date().getFullYear(), "Invalid target year")
});

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email"),

    password: z
        .string()
        .min(1, "Password is required")
});

export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address")
});

export const resetPasswordSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address"),
    otp: z
        .string()
        .length(6, "OTP must be 6 digits"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
});

export const verifyEmailSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address"),
    otp: z
        .string()
        .length(6, "OTP must be 6 digits")
});