import { React,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthLayout from "../Layouts/AuthLayout";
import AuthInput from "../components/Authinput";
import PasswordInput from "../components/PasswordInput";
import AuthButton from "../components/AuthButton";
import useForm from "../hooks/useForm";
import authService from "../services/authservice";
import useAuth from "../hooks/useAuth";
const Login = () => {
    const navigate = useNavigate();
    const {formData,handleChange,resetForm} = useForm({email: "",password: ""});
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await authService.login(formData);
            toast.success(response.message);
            // console.log(response);
            resetForm();
            navigate("/dashboard");
        }
        catch (err) {
            toast.error(
                err.response?.data?.message ||err.message ||"Something went wrong"
            );
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Login to continue your GATE preparation."
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-1"
            >
                <AuthInput
                    label="Email"
                    type="email"
                    name="email"
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
                <div className="flex justify-end">
                    <button type="button" className="text-blue-600 hover:underline text-sm" 
                        onClick={() => navigate("/forgot-password")}>
                        Forgot Password?
                    </button>
                </div>
                <AuthButton
                    text="Login"
                    loading={loading}
                />
            </form>
            <p className="mt-6 text-center text-gray-600">
                Don't have an account?
                <Link
                    to="/signup"
                    className="text-blue-600 font-semibold ml-2"
                >
                    Sign Up
                </Link>
            </p>
        </AuthLayout>
    );
};

export default Login;