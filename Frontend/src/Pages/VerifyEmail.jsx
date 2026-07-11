import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../Layouts/AuthLayout";
import AuthInput from "../components/Authinput";
import AuthButton from "../components/AuthButton";

import useForm from "../hooks/useForm";
import authservice from "../services/authservice";

const VerifyEmail = () => 
{
    const navigate = useNavigate();
    const { state } = useLocation();
    const email = state?.email;
    const {
        formData,
        handleChange,
        resetForm
    } = useForm({
        otp: ""
    });
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await authservice.verifyEmail({
                email,
                otp: formData.otp
            });
            toast.success(response.message);
            resetForm();
            navigate("/login");
        }
        catch (err) {
            toast.error(
                err.response?.data?.message ||
                err.message ||
                "Something went wrong"
            );
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <AuthLayout
            title="Verify Email"
            subtitle={`We've sent a verification code to ${email}`}
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <AuthInput
                    label="Verification OTP"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    placeholder="Enter 6-digit OTP"
                />
                <AuthButton
                    text="Verify Email"
                    loading={loading}
                />
            </form>
            <p className="mt-6 text-center text-gray-600">
                Didn't receive the OTP?
                <button
                    type="button"
                    className="ml-2 text-blue-600 font-semibold hover:text-blue-700"
                    onClick={() => {
                        toast("Resend OTP coming soon 🚀");
                    }}
                >
                    Resend OTP
                </button>
            </p>
        </AuthLayout>
    );
};
export default VerifyEmail;