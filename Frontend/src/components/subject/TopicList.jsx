import { CheckCircleIcon } from "@heroicons/react/24/solid";

const TopicList = ({ subject, setSubject }) => {

    const toggleTopic = (id) => {

        const updatedTopics = subject.topics.map(topic =>

            topic.id === id
                ? {
                    ...topic,
                    completed: !topic.completed
                }
                : topic

        );

        const completedTopics = updatedTopics.filter(
            topic => topic.completed
        ).length;

        const progress = Math.round(
            (completedTopics / updatedTopics.length) * 100
        );

        setSubject({

            ...subject,

            topics: updatedTopics,

            completedTopics,

            progress

        });

    };

    return (

        <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">

                        Topics

                    </h2>

                    <p className="text-gray-500">

                        Mark topics after you finish studying them.

                    </p>

                </div>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

                    {subject.completedTopics} / {subject.totalTopics}

                </span>

            </div>

            <div className="space-y-4">

                {

                    subject.topics.map(topic => (

                        <div

                            key={topic.id}

                            className="flex items-center justify-between rounded-xl border border-gray-200 px-5 py-4 hover:border-blue-500 transition"

                        >

                            <div className="flex items-center gap-4">

                                <button

                                    onClick={() => toggleTopic(topic.id)}

                                >

                                    <CheckCircleIcon

                                        className={`h-7 w-7 ${
                                            topic.completed
                                                ? "text-green-500"
                                                : "text-gray-300"
                                        }`}

                                    />

                                </button>

                                <p

                                    className={`font-medium ${
                                        topic.completed
                                            ? "line-through text-gray-400"
                                            : "text-gray-800"
                                    }`}

                                >

                                    {topic.name}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default TopicList;