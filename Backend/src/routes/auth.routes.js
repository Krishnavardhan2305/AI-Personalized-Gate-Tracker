import { Router } from "express";
import {signup,login, verifyEmail} from "../controllers/auth.controller.js";
import validate from "../middleware/validate.middleware.js";
import {signupSchema,loginSchema, verifyEmailSchema} from "../validators/auth.validator.js";
import {forgotPassword,resetPassword} from "../controllers/auth.controller.js";
import {forgotPasswordSchema,resetPasswordSchema} from "../validators/auth.validator.js";
const router = Router();


router.post("/signup",validate(signupSchema),signup);
router.post("/verify-email",validate(verifyEmailSchema),verifyEmail);
router.post("/login",validate(loginSchema),login);
router.post("/forgot-password",validate(forgotPasswordSchema),forgotPassword);
router.post("/reset-password",validate(resetPasswordSchema),resetPassword);

export default router;