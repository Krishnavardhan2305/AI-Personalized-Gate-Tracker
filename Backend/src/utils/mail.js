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