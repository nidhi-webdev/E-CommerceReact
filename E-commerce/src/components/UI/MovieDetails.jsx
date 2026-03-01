import { useParams } from "react-router-dom"

export const MovieDetails = () => {
    const param = useParams()
    console.log("From Movie Details Page", param);


    return <h1> Hello Dynamic Route {param.movieId} </h1>
}