import { useNavigate } from "react-router-dom";
import { subjects } from "../../data/subjects";


const DashboardHero = () => {

  const navigate = useNavigate();

  const greeting = () => {

    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";

    return "Good Evening";
  };

  return (

    <section>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-800">

          {greeting()}, Krishna 👋

        </h1>

        <p className="mt-2 text-gray-600">

          GATE 2027 • 178 Days Remaining

        </p>

        <p className="mt-4 text-gray-500">

          Choose a subject and continue your preparation.

        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {

          subjects.map(subject => (

            <div

              key={subject.id}

              onClick={() => navigate(`/subjects/${subject.slug}`)}

              className="cursor-pointer rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"

            >

              <div className={`h-3 bg-gradient-to-r ${subject.color}`}></div>

              <div className="p-5">

                <h2 className="font-bold text-lg text-gray-800">

                  {subject.name}

                </h2>

                <p className="mt-2 text-sm text-gray-500">

                  {subject.completedTopics} / {subject.totalTopics} Topics Completed

                </p>

                <div className="mt-5">

                  <div className="flex justify-between text-sm font-medium">

                    <span>Progress</span>

                    <span>{subject.progress}%</span>

                  </div>

                  <div className="mt-2 h-2 rounded-full bg-gray-200">

                    <div

                      style={{
                        width: `${subject.progress}%`
                      }}

                      className={`h-2 rounded-full bg-gradient-to-r ${subject.color}`}

                    />

                  </div>
                  <div className="mt-4 border-t pt-3">

                    <p className="text-xs text-gray-500">

                      Last Studied

                    </p>

                    <p className="font-medium text-gray-700">

                      {subject.lastStudied}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

};

export default DashboardHero;