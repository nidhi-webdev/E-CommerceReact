import { useParams } from "react-router-dom"

export const MovieDetails = () => {
const param = useParams()
console.log(param);


    return <h1> Hello Dynamic Route </h1>
}