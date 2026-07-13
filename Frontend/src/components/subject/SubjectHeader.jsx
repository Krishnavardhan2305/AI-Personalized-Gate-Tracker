import {
    ArrowLeftIcon,
    BookOpenIcon,
    DocumentTextIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
const SubjectHeader = ({ subject }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-3xl shadow-md p-8">
            {/* Top */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                {/* L*/}
                <div>
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6"
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                        Back to Dashboard
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <BookOpenIcon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800">
                                {subject.name}
                            </h1>
                            <p className="text-gray-500 mt-2">
                                Complete topics, revise notes and practice AI-generated quizzes.
                            </p>
                        </div>
                    </div>
                </div>
                {/* R */}
                <div className="bg-gray-50 rounded-2xl p-6 min-w-[280px]">
                    <div className="flex justify-between text-sm font-semibold mb-2">
                        <span>Progress</span>
                        <span>{subject.progress}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-gray-200">
                        <div
                            style={{
                                width: `${subject.progress}%`
                            }}
                            className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                        />
                    </div>
                    <p className="mt-4 text-gray-600">
                        {subject.completedTopics} of {subject.totalTopics} Topics Completed
                    </p>
                    <a
                        href={subject.notesLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700 transition"
                    >
                        <DocumentTextIcon className="h-5 w-5" />
                        View Notes
                    </a>
                </div>
            </div>
        </div>
    );
};
export default SubjectHeader;