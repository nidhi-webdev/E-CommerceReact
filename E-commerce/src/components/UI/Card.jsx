import { NavLink } from "react-router-dom"

export const Card = ({ curMovie }) => {
    const { Poster, Title, imdbID } = curMovie


    return (
        <li className="list-none cursor-pointer">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden p-5 pt-0 flex flex-col h-full transform transition-transform hover:scale-105">
                <div className="relative h-96 overflow-hidden">
                    <img
                        src={Poster}
                        alt={Title}
                        className="w-full h-full object-cover "
                    />
                </div>
                <div className="p-4 flex flex-col grow justify-between gap-3">
                    <h2 className="text-lg font-semibold line-clamp-1">{curMovie.Title}</h2>
                    <NavLink to={`/movie/${imdbID}`}>
                        <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-900 transition-colors w-full cursor-pointer">
                            Watch Now
                        </button>
                    </NavLink>
                </div>
            </div>
        </li>
    )
}