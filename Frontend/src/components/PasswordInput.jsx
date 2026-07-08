import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({
    label,
    name,
    value,
    onChange,
    placeholder
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="mb-5">

            <label className="block mb-2 font-medium">

                {label}

            </label>

            <div className="relative">

                <input

                    type={showPassword ? "text" : "password"}

                    name={name}

                    value={value}

                    onChange={onChange}

                    placeholder={placeholder}

                    className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"

                />

                <button

                    type="button"

                    onClick={() => setShowPassword(!showPassword)}

                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"

                >

                    {

                        showPassword

                        ?

                        <EyeOff size={20} />

                        :

                        <Eye size={20} />

                    }

                </button>

            </div>

        </div>

    );

};

export default PasswordInput;