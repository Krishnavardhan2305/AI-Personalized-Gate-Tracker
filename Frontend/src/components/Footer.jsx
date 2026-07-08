import {
    GraduationCap,
    Mail,
    Heart,
    ArrowRight,
} from "lucide-react";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-slate-900 text-white mt-20"
        >
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Top */}

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}

                    <div>

                        <div className="flex items-center gap-3">

                            <GraduationCap
                                size={36}
                                className="text-blue-400"
                            />

                            <h2 className="text-3xl font-bold">

                                GateAI

                            </h2>

                        </div>

                        <p className="mt-6 text-slate-300 leading-8 max-w-lg">

                            GateAI is an AI-powered platform built to help
                            students prepare smarter for GATE through
                            personalized study planning, AI-generated quizzes,
                            progress tracking and organized subject notes.

                        </p>

                    </div>

                    {/* Right */}

                    <div className="bg-slate-800 rounded-3xl p-8">

                        <h3 className="text-2xl font-bold">

                            Have a suggestion?

                        </h3>

                        <p className="text-slate-300 mt-3">

                            We'd love to hear your ideas and feedback.
                            Help us improve GateAI.

                        </p>

                        <a
                            href="mailto:gateai.team@gmail.com"
                            className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
                        >
                            <Mail size={18} />

                            Send Feedback

                            <ArrowRight size={18} />
                        </a>

                    </div>

                </div>

                {/* Divider */}

                <div className="border-t border-slate-700 my-10"></div>

                {/* Bottom */}

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-slate-400 text-center md:text-left">

                        © {new Date().getFullYear()} GateAI.

                        All Rights Reserved.

                    </div>

                    <div className="flex items-center gap-8">

                        <a
                            href="mailto:gateai.team@gmail.com"
                            className="flex items-center gap-2 hover:text-blue-400 transition"
                        >
                            <Mail size={18} />

                            Contact
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-blue-400 transition"
                        >
                        

                            GitHub
                        </a>

                    </div>

                    <div className="flex items-center gap-2 text-slate-400">

                        Made with

                        <Heart
                            size={18}
                            className="text-red-500 fill-red-500"
                        />

                        for GATE Aspirants

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;