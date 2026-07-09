import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import AuthLayout from "../Layouts/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";
import authService from "../services/authservice";
import useForm from "../hooks/useForm";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const { formData, handleChange } = useForm({
        email: ""
    });
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            // Backend API
            const response = await authService.forgotPassword(formData);
            toast.success(response.message);
            navigate("/reset-password", 
            {
                state: 
                {
                    email: formData.email
                }
            });
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
            title="Forgot Password"
            subtitle="Enter your registered email to receive an OTP."
        >
            <form onSubmit={handleSubmit}>
                <AuthInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                <AuthButton
                    text="Send OTP"
                    loading={loading}
                />
            </form>
        </AuthLayout>
    );
};

export default ForgotPassword;