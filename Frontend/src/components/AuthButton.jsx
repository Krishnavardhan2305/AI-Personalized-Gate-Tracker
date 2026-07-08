const AuthButton = ({
    text,
    loading
}) => {

    return (

        <button

            type="submit"

            disabled={loading}

            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"

        >

            {

                loading

                ?

                "Please Wait..."

                :

                text

            }

        </button>

    );

};

export default AuthButton;