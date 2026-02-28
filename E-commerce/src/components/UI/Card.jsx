export const Card = ({ curMovie }) => {
    console.log("Card Component", curMovie);


    return (
        <li className="list-none">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105">
                <div className="relative h-96 overflow-hidden">
                    <img 
                      src={curMovie.Poster} 
                      alt={curMovie.Title}  
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 flex flex-col grow justify-between gap-3">
                    <h2 className="text-lg font-semibold line-clamp-1">{curMovie.Title}</h2>
                    <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors w-full"> 
                        Watch Now 
                    </button>
                </div>
            </div>
        </li>
    )
}