const AuthInput = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder
}) => {

    return (

        <div className="mb-5">

            <label className="block mb-2 font-medium text-black">

                {label}

            </label>

            <input

                type={type}

                name={name}

                value={value}

                onChange={onChange}

                placeholder={placeholder}

                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

            />

        </div>

    );

};

export default AuthInput;