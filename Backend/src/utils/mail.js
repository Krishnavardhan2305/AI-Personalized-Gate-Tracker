import transporter from "../config/mail.js";
export const sendOTPEmail = async (email, otp) => {
    await transporter.sendMail({
        from: `"GateAI" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "GateAI Password Reset OTP",
        html: `
            <div style="font-family:Arial;padding:20px">
                <h2>Password Reset</h2>
                <p>
                    Use the following OTP to reset your password.
                </p>
                <h1 style="letter-spacing:8px">
                    ${otp}
                </h1>
                <p>
                    This OTP is valid for 10 minutes.
                </p>
                <p>
                    If you didn't request this,
                    please ignore this email.
                </p>
            </div>
        `
    });
};

export const sendVerificationEmail = async (email, otp) => {
    await transporter.sendMail({
        from: `"GateAI" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Verify your GateAI account",
        html: `
            <h2>Email Verification</h2>
            <p>Your verification code is</p>
            <h1>${otp}</h1>
            <p>This OTP expires in 10 minutes.</p>
        `
    });
};