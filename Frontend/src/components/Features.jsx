import {
    Brain,
    BookOpenCheck,
    BarChart3,
    CalendarClock,
    NotebookPen,
    Bot,
    CheckCircle2,
} from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "AI Study Planner",
        description:
            "Generate a personalized study schedule based on your target year and available study hours.",
    },
    {
        icon: Bot,
        title: "AI Quiz Generator",
        description:
            "Practice topic-wise quizzes generated instantly with AI using previous GATE questions as inspiration.",
    },
    {
        icon: BarChart3,
        title: "Progress Tracking",
        description:
            "Monitor subject-wise completion, confidence level and overall preparation.",
    },
    {
        icon: CalendarClock,
        title: "Smart Revision",
        description:
            "Never forget a topic again with AI-powered revision reminders.",
    },
    {
        icon: NotebookPen,
        title: "Subject Notes",
        description:
            "Maintain notes for every subject and revise whenever required.",
    },
    {
        icon: BookOpenCheck,
        title: "Everything in One Place",
        description:
            "Planner, quizzes, notes and progress tracking under one platform.",
    },
];

const Features = () => {
    return (
        <section
            id="features"
            className="py-24 bg-slate-50"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <h2 className="text-4xl font-bold text-green-700">

                        Everything You Need to Crack GATE

                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">

                        GateAI combines AI with smart preparation techniques
                        so you can focus on studying instead of planning.

                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-16 mt-20">

                    {/* Dashboard Preview */}

                    <div className="bg-white rounded-3xl shadow-xl border p-8">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-700 text-sm font-bold">

                                    Dashboard Preview

                                </p>

                                <h3 className="text-2xl text-purple-700 font-bold">
                                    Welcome Back 

                                </h3>

                            </div>

                            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">

                                142 Days Left

                            </div>

                        </div>

                        {/* Progress */}

                        <div className="mt-8">

                            <div className="flex justify-between mb-2">

                                <span className="font-medium text-2xl text-gray-700">

                                    Overall Progress

                                </span>

                                <span className="text-blue-600 font-bold">

                                    68%

                                </span>

                            </div>

                            <div className="h-3 bg-gray-200 rounded-full">

                                <div className="h-3 rounded-full bg-blue-600 w-2/3"></div>

                            </div>

                        </div>

                        {/* AI Suggestion */}

                        <div className="mt-8 bg-blue-50 rounded-2xl p-5">

                            <h4 className="font-bold text-blue-700">

                                🤖 AI Recommendation

                            </h4>

                            <p className="mt-3 text-gray-600">

                                Today focus on
                                <span className="font-semibold text-black">

                                    {" "}Deadlocks

                                </span>,
                                <span className="font-semibold text-black">

                                    {" "}Normalization

                                </span>
                                and revise
                                <span className="font-semibold text-black">

                                    {" "}Trees.

                                </span>

                            </p>

                        </div>

                        {/* Subjects */}

                        <div className="mt-8 text-xl text-black">

                            <h4 className="font-bold mb-4 text-2xl text-gray-700" >

                                Subjects Progress

                            </h4>

                            {
                                [
                                    ["Operating Systems", "72%"],
                                    ["DBMS", "61%"],
                                    ["Computer Networks", "54%"],
                                    ["DAA", "80%"]
                                ].map((subject) => (

                                    <div
                                        key={subject[0]}
                                        className="mb-5"
                                    >

                                        <div className="flex justify-between mb-1">

                                            <span>

                                                {subject[0]}

                                            </span>

                                            <span>

                                                {subject[1]}

                                            </span>

                                        </div>

                                        <div className="h-2 rounded-full bg-gray-200">

                                            <div
                                                className="h-2 rounded-full bg-blue-600"
                                                style={{
                                                    width: subject[1]
                                                }}
                                            />

                                        </div>

                                    </div>

                                ))
                            }

                        </div>

                    </div>

                    {/* Feature List */}

                    <div className="grid gap-6">

                        {
                            features.map((feature) => {

                                const Icon = feature.icon;

                                return (

                                    <div
                                        key={feature.title}
                                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                                    >

                                        <div className="flex gap-5">

                                            <div className="bg-blue-100 p-4 rounded-xl h-fit">

                                                <Icon
                                                    size={28}
                                                    className="text-blue-600"
                                                />

                                            </div>

                                            <div>

                                                <h3 className="font-bold text-xl">

                                                    {feature.title}

                                                </h3>

                                                <p className="text-gray-600 mt-2">

                                                    {feature.description}

                                                </p>

                                                <div className="mt-3 flex items-center gap-2 text-green-600">

                                                    <CheckCircle2
                                                        size={18}
                                                    />

                                                    <span>

                                                        Included in every account

                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                );

                            })
                        }

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Features;