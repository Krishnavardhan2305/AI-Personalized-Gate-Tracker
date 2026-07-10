import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";

import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link, useLocation, useNavigate } from "react-router-dom";

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Subjects", href: "/subjects" },
    { name: "Planner", href: "/planner" },
    { name: "Progress", href: "/progress" },
    { name: "AI Quiz", href: "/quiz" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const DashBoardNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        // Later:
        // await axios.post("/api/auth/logout");

        navigate("/login");
    };

    return (
        <Disclosure
            as="nav"
            className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    {/* Mobile Button */}
                    <div className="flex items-center sm:hidden">
                        <DisclosureButton className="rounded-md p-2 text-gray-700 hover:bg-gray-100">
                            <Bars3Icon className="block h-6 w-6 group-data-open:hidden" />
                            <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white text-lg font-bold">
                            G
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-gray-800">
                                AI GATE Tracker
                            </h1>
                            <p className="text-xs text-gray-500">
                                Personalized Preparation
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex items-center gap-2">
                        {navigation.map((item) => {
                            const current = location.pathname === item.href;

                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        current
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600",
                                        "rounded-lg px-4 py-2 text-sm font-medium transition-all"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        {/* Notification */}
                        <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition">
                            <BellIcon className="h-6 w-6" />
                        </button>

                        {/* Profile */}
                        <Menu as="div" className="relative">
                            <MenuButton>
                                <img
                                    src="https://ui-avatars.com/api/?name=Krishna+Vardhan&background=2563eb&color=fff"
                                    alt="Profile"
                                    className="h-10 w-10 rounded-full border-2 border-blue-500"
                                />
                            </MenuButton>

                            <MenuItems className="absolute right-0 mt-2 w-52 rounded-lg bg-white shadow-lg border border-gray-200 py-2">
                                <MenuItem>
                                    {({ focus }) => (
                                        <Link
                                            to="/profile"
                                            className={classNames(
                                                focus ? "bg-gray-100" : "",
                                                "block px-4 py-2 text-sm text-gray-700"
                                            )}
                                        >
                                            👤 My Profile
                                        </Link>
                                    )}
                                </MenuItem>

                                <MenuItem>
                                    {({ focus }) => (
                                        <Link
                                            to="/settings"
                                            className={classNames(
                                                focus ? "bg-gray-100" : "",
                                                "block px-4 py-2 text-sm text-gray-700"
                                            )}
                                        >
                                            ⚙️ Settings
                                        </Link>
                                    )}
                                </MenuItem>

                                <div className="border-t my-2" />

                                <MenuItem>
                                    {({ focus }) => (
                                        <button
                                            onClick={handleLogout}
                                            className={classNames(
                                                focus ? "bg-red-50" : "",
                                                "w-full text-left px-4 py-2 text-sm font-medium text-red-600"
                                            )}
                                        >
                                            🚪 Logout
                                        </button>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="sm:hidden border-t border-gray-200 bg-white">
                <div className="space-y-2 px-4 py-4">
                    {navigation.map((item) => {
                        const current = location.pathname === item.href;

                        return (
                            <DisclosureButton
                                key={item.name}
                                as={Link}
                                to={item.href}
                                className={classNames(
                                    current
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-700 hover:bg-blue-50",
                                    "block rounded-lg px-3 py-2 text-base font-medium"
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        );
                    })}

                    <button
                        onClick={handleLogout}
                        className="mt-3 w-full rounded-lg bg-red-500 py-2 text-white hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

export default DashBoardNav
