import { useState } from "react";
import {
    SparklesIcon,
    ArrowPathIcon
} from "@heroicons/react/24/outline";

const AISuggestions = () => {
    const [suggestions] = useState([
        {
            id: 1,
            title: "Solve 20 Operating Systems PYQs"
        },
        {
            id: 2,
            title: "Revise SQL Joins"
        },
        {
            id: 3,
            title: "Read Deadlock Notes"
        }
    ]);

    return (
        <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="flex justify-between items-center">
                <div>

                    <h2 className="text-2xl font-bold">
                        AI Suggestions
                    </h2>

                    <p className="text-gray-500">
                        Choose what you want to study today.
                    </p>
                </div>
                <SparklesIcon className="h-7 w-7 text-violet-600"/>
            </div>

            <div className="space-y-4 mt-6">
                {
                    suggestions.map(task=>(
                        <label
                            key={task.id}
                            className="flex gap-3 items-center border rounded-xl p-4 hover:border-violet-500 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                            />
                            <span>
                                {task.title}
                            </span>
                        </label>
                    ))
                }
            </div>

            <button
                className="w-full mt-6 bg-violet-600 text-white rounded-xl py-3 hover:bg-violet-700"
            >
                Accept Selected
            </button>

            <button
                className="w-full mt-3 border rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-gray-50"
            >
                <ArrowPathIcon className="h-5 w-5"/>
                Regenerate
            </button>
        </div>
    );
};
export default AISuggestions;