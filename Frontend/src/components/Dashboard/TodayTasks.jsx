import { useState } from "react";
import {
    PlusIcon,
    SparklesIcon,
    TrashIcon,
    CheckCircleIcon
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
const TodayTasks = () => 
{
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Revise Deadlocks",
            completed: false,
            type: "AI"
        },
        {
            id: 2,
            title: "Solve 20 DBMS PYQs",
            completed: true,
            type: "AI"
        },
        {
            id: 3,
            title: "Read CN Notes",
            completed: false,
            type: "MANUAL"
        }
    ]);
    const [newTask, setNewTask] = useState("");
    const toggleTask = (id) => 
    {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? {
                        ...task,
                        completed: !task.completed
                    }
                    : task
            )
        );
    };
    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };
    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks(prev => [
            ...prev,
            {
                id: Date.now(),
                title: newTask,
                completed: false,
                type: "MANUAL"
            }
        ]);
        setNewTask("");
    };

    // const generateAIPlan = () => {
    //     toast.error("AI Planner will be connected later ");
    // };
    return (
        <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Today's Tasks
                    </h2>
                    <p className="text-gray-500">
                        Complete your goals one by one.
                    </p>
                </div>
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {tasks.filter(task => task.completed).length} / {tasks.length} Completed
                </span>
            </div>
            <div className="space-y-3">
                {tasks.map(task => (
                    <div
                        key={task.id}
                        className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:border-blue-500 transition"
                    >
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => toggleTask(task.id)}
                            >
                                <CheckCircleIcon
                                    className={`h-6 w-6 ${task.completed
                                            ? "text-green-500"
                                            : "text-gray-300"
                                        }`}
                                />
                            </button>
                            <div>
                                <p
                                    className={`${task.completed
                                            ? "line-through text-gray-400"
                                            : "text-gray-800"
                                        } font-medium`}
                                >
                                    {task.title}
                                </p>
                                <span
                                    className={`text-xs font-semibold ${task.type === "AI"
                                            ? "text-purple-600"
                                            : "text-blue-600"
                                        }`}
                                >
                                    {task.type}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex gap-3">
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add today's task..."
                    className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={addTask}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
                >
                    <PlusIcon className="h-5 w-5" />
                    Add
                </button>
            </div>
        </div>
    );
};
export default TodayTasks;