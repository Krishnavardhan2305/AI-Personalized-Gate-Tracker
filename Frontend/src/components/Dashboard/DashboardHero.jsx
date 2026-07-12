import {
  CalendarDaysIcon,
  TrophyIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

const DashboardHero = () => {

  // Dummy Data (Later comes from Backend)
  const user = {
    name: "Krishna",
    targetYear: 2027,
    daysLeft: 178,
    targetAIR: 100,
    streak: 12,
  };

  const greeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";

    return "Good Evening";
  };

  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white p-8 shadow-lg">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left */}
        <div>

          <h1 className="text-4xl font-bold">

            {greeting()}, {user.name} 👋

          </h1>

          <p className="mt-3 text-blue-100 text-lg max-w-2xl">

            Stay consistent. Every topic you complete today brings you one
            step closer to your dream IIT.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur">

              <CalendarDaysIcon className="h-6 w-6" />

              <div>

                <p className="text-xs uppercase tracking-wide text-blue-100">

                  Target

                </p>

                <p className="font-semibold">

                  GATE {user.targetYear}

                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur">

              <TrophyIcon className="h-6 w-6" />

              <div>

                <p className="text-xs uppercase tracking-wide text-blue-100">

                  Goal

                </p>

                <p className="font-semibold">

                  AIR &lt; {user.targetAIR}

                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur">

              <FireIcon className="h-6 w-6 text-orange-300" />

              <div>

                <p className="text-xs uppercase tracking-wide text-blue-100">

                  Study Streak

                </p>

                <p className="font-semibold">

                  {user.streak} Days 🔥

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="rounded-2xl bg-white text-gray-800 p-8 w-full max-w-sm shadow-xl">

          <p className="text-gray-500 text-sm">

            Days Remaining

          </p>

          <h2 className="mt-2 text-6xl font-extrabold text-blue-700">

            {user.daysLeft}

          </h2>

          <p className="mt-2 text-gray-600">

            Days left until GATE {user.targetYear}

          </p>

          <div className="mt-6">

            <div className="flex justify-between text-sm font-medium">

              <span>Preparation Progress</span>

              <span>28%</span>

            </div>

            <div className="mt-2 h-3 rounded-full bg-gray-200">

              <div className="h-3 w-[28%] rounded-full bg-blue-600"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DashboardHero;