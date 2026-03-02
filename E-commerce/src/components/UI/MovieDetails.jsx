import { NavLink, useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
    const movieData = useLoaderData()
    console.log("From Movie Details Page", movieData);
    const { Actors, Poster, Title, Type, Year, Plot } = movieData

    return (

        <div className="cursor-pointer shadow-2xl ml-5 mt-10 w-91">
            <div className="ml-7">
                <NavLink>
                    <img src={Poster} className="" alt={Title} />
                </NavLink>
            </div>
            <div className="ml-7 ">
                <h4> {Title} </h4>
                <p> {Plot} </p>
                <p> Actor: {Actors} </p>
                <p> Type: {Type} </p>
                <p> Year: {Year} </p>
            </div>
            <button className="w-full bg-green-900 px-4 py-2 text-white"> Watch Now </button>

        </div>

    )
}