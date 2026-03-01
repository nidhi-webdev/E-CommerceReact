// Now It become a function not component becuase here 
export const getMovieData = async () => {
    try {
        console.log("Fetching movie data..."); // Diagnostic log
        // This is a manual delay of 3 seconds to test the loading state
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        const apiKey = import.meta.env.VITE_API_KEY.trim();
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=titanic&page=1`)
        
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