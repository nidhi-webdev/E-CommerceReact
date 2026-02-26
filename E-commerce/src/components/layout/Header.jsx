import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div className="ml-5 mr-5">
            <div className="bg-gray-800 text-white flex justify-around p-5 ">
                <h1> Get membership, 30-days return or rufund Guarantee </h1>
                <div className="flex gap-5 cursor-pointer">
                    <NavLink to="#"> SIGN IN </NavLink>
                    <NavLink to="#"> SIGN OUT  </NavLink>
                </div>
            </div>

            <div className="bg-amber-100 flex justify-around items-center p-4 shadow-md">
                <h1 className="text-2xl font-bold"> Filx </h1>
                <nav> 
                    <ul className="flex gap-8 cursor-pointer">
                        <li> <NavLink to="/"> Home </NavLink></li>
                        <li> <NavLink to="/about"> About </NavLink></li>
                        <li> <NavLink to="/movie"> Movie </NavLink></li>
                        <li> <NavLink to="/contact"> Contact </NavLink></li>
                    </ul>
                </nav>
            </div>

            
        </div>
    )
}