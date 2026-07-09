import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthLayout from "../Layouts/AuthLayout";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import AuthButton from "../components/AuthButton";
import useForm from "../hooks/useForm";
import authService from "../services/authservice";
const ResetPassword = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const email = state?.email;
    const {
        formData,
        handleChange,
        resetForm
    } = useForm({
        otp: "",
        password: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            setLoading(true);
            // Backend API
            await authService.resetPassword({
                email,
                otp: formData.otp,
                password: formData.password
            });
            toast.success("Password changed successfully");
            resetForm();
            navigate("/login"); 
        }
        catch (err) {
            toast.error(
                err.response?.data?.message ||
                "Something went wrong"
            );
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <AuthLayout
            title="Reset Password"
            subtitle={`OTP sent to (${email}). Please enter the OTP and your new password.`}
        >
            <form onSubmit={handleSubmit}>
                <AuthInput
                    label="OTP"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    placeholder="Enter 6-digit OTP"
                />
                <PasswordInput
                    label="New Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                />
                <PasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                />
                <AuthButton
                    text="Reset Password"
                    loading={loading}
                />
            </form>
        </AuthLayout>
    );

};

export default ResetPassword;