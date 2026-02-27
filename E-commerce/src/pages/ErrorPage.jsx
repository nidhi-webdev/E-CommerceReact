import { NavLink, useRouteError, useNavigate } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }


    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-3">
            <figure> <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 Page" /></figure>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl"> The page yor were looking for could not be found   </h1>
                <p className="text-xl"> Back to previous page </p>
            </div>

            <div className="">
                <button className="bg-blue-500 px-4 py-1 rounded mr-2 cursor-pointer"
                    onClick={handleGoBack}> Go back </button>


                <NavLink to="/" className={`bg-red-700 px-4 py-2 rounded text-white`}>
                    Go Back to Home page
                </NavLink>
            </div>

        </div>

    )
}