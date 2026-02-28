// Now It become a function not component becuase here 
export const getMovieData = async () => {
    try {
        const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1")
        const data = await response.json()
        console.log("response Data", data)
        return data
    } catch (error) {
        console.log("error", error);
    }

}