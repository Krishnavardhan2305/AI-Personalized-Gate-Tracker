import { Link } from "react-router-dom";
import { Brain, BookOpen, Target } from "lucide-react";

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100">

            <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}

                <div>

                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

                        🚀 AI Powered GATE Preparation

                    </span>

                    <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">

                        Prepare Smarter.

                        <br />

                        Crack <span className="text-blue-600">GATE</span> Faster.

                    </h1>

                    <p className="mt-8 text-lg text-gray-600 leading-8">

                        Plan your preparation using AI, generate unlimited quizzes,
                        monitor subject-wise progress, organize notes,
                        and stay consistent until GATE.

                    </p>

                    <div className="mt-10 flex gap-5">

                        <Link
                            to="/signup"
                            className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl font-semibold"
                        >
                            Get Started
                        </Link>

                        <a
                            href="#features"
                            className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
                        >
                            Learn More
                        </a>

                    </div>

                </div>

                {/* Right Side */}

                <div className="grid gap-6">

                    <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

                        <Brain
                            className="text-blue-600"
                            size={42}
                        />

                        <div>

                            <h3 className="font-bold text-xl">

                                AI Study Planner

                            </h3>

                            <p className="text-gray-600 mt-2">

                                Get a personalized daily study plan
                                based on your target year and available study hours.

                            </p>

                        </div>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

                        <BookOpen
                            className="text-green-600"
                            size={42}
                        />

                        <div>

                            <h3 className="font-bold text-xl">

                                AI Quiz Generator

                            </h3>

                            <p className="text-gray-600 mt-2">

                                Generate topic-wise quizzes instantly
                                using previous GATE questions as inspiration.

                            </p>

                        </div>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

                        <Target
                            className="text-orange-500"
                            size={42}
                        />

                        <div>

                            <h3 className="font-bold text-xl">

                                Smart Progress Tracking

                            </h3>

                            <p className="text-gray-600 mt-2">

                                Track completed topics,
                                confidence level,
                                revision schedule,
                                and overall preparation.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;