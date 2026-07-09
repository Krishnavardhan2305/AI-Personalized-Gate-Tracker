import { ArrowLeft, BrainCircuit, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
const features = [
    "AI Powered Study Planner",
    "Unlimited AI Quiz Generation",
    "Track Subject Progress",
];
const AuthLayout = ({ title, subtitle, children }) => {
    const navigate=useNavigate();

    return (

        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left */}

            <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-16">
                {/* Back Button */}
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="absolute top-8 left-8 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-md cursor-pointer"
                >
                    <ArrowLeft size={18} />
                    <span className="font-medium">Back</span>
                </button>

                <div className="flex items-center gap-4">

                    <BrainCircuit size={45} />

                    <h1 className="text-4xl font-bold">

                        GateAI

                    </h1>

                </div>

                <h2 className="mt-12 text-5xl font-bold leading-tight">

                    Master GATE

                    <br />

                    with Artificial Intelligence

                </h2>

                <p className="mt-8 text-lg text-blue-100 leading-8">

                    Your personalized companion for planning,
                    revision, quizzes and progress tracking.

                </p>

                <div className="mt-12 space-y-6">

                    {

                        features.map((item) => (

                            <div
                                key={item}
                                className="flex items-center gap-3"
                            >

                                <CheckCircle2
                                    className="text-green-300"
                                />

                                <span className="text-lg">

                                    {item}

                                </span>

                            </div>

                        ))

                    }

                </div>

            </div>

            {/* Right */}

            <div className="flex justify-center items-center bg-slate-50 p-8">

                <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

                    <h2 className="text-4xl font-bold text-black">

                        {title}

                    </h2>

                    <p className="mt-3 text-gray-500">

                        {subtitle}

                    </p>

                    <div className="mt-8 text-xl font-semibold text-black">

                        {children}

                    </div>

                </div>

            </div>

        </div>

    );

};

export default AuthLayout;