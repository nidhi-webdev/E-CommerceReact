import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
    const movieData = useLoaderData()

    
    console.log("From Movie Details Page", movieData);


    return <h1> Hello Dynamic Route {movieData.Poster} </h1>
}