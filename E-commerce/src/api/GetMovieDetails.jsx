
export const getMovieDetails = async ({ params }) => {
    const id = params.movieId
    try {   
        const apiKey = import.meta.env.VITE_API_KEY.trim();
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        console.log("response Data from GetApiData", data)
        return data
    } catch (error) {
        console.log("error", error);
    }

}