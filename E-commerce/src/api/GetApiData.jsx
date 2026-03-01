// Now It become a function not component becuase here 
export const getMovieData = async () => {
    try {
        // This is a manual delay of 3 seconds to test the loading state
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`)
        const data = await response.json()
        console.log("response Data", data)
        return data
    } catch (error) {
        console.log("error", error);
    }

}