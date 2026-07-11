import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import toast from "react-hot-toast";
import AuthLayout from "../Layouts/AuthLayout";
import AuthInput from "../components/Authinput";
import PasswordInput from "../components/PasswordInput";
import AuthButton from "../components/AuthButton";
import useForm from "../hooks/useForm";
import authservice from "../services/authservice";
const Signup = () => {
    const navigate = useNavigate();
    const { formData, handleChange, resetForm } = useForm({
        email: "",
        password: "",
        confirmPassword: "",
        gateTargetYear: ""

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
            console.log(formData);
            // API Call
            const response = await authservice.signup({
                email: formData.email,
                password: formData.password,
                gateTargetYear: Number(formData.gateTargetYear)
            });

            toast.success(response.message);
            resetForm();
            navigate("/verify-email",
                {
                    state: {
                        email:formData.email
                    }
                }
            );
        }
        catch (err) {
            console.error(err);
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

            title="Create Account"
            subtitle="Start your AI-powered GATE preparation journey."
        >
            <form onSubmit={handleSubmit} className="space-y-1 text-xl text-gray-800">
                <AuthInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                <PasswordInput
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                />
                <PasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                />
                <AuthInput
                    label="Target GATE Year"
                    name="gateTargetYear"
                    type="number"
                    value={formData.gateTargetYear}
                    onChange={handleChange}
                    placeholder="2027"
                />
                <div className="pt-2">
                    <AuthButton
                        text="Create Account"
                        loading={loading}
                    />
                </div>
            </form>
            <p className="mt-6 text-center text-gray-600">
                Already have an account?
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold ml-2">
                    Login
                </Link>
            </p>
        </AuthLayout>
    );
};
export default Signup;