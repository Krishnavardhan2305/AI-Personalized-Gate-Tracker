import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-3xl font-bold text-blue-600"
                >
                    Gate<span className="text-black">AI</span>
                </Link>

                {/* Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <a href="#features" className="hover:text-blue-600 transition text-black">
                        Features
                    </a>

                    <a href="#how-it-works" className="hover:text-blue-600 transition text-black">
                        How It Works
                    </a>

                    <a href="#contact" className="hover:text-blue-600 transition text-black">
                        Contact
                    </a>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <Link
                        to="/login"
                        className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;