export const Header = () => {
    return (
        <div className="ml-5 mr-5">
            <div className="bg-gray-800 text-white flex justify-around p-5 ">
                <h1> Get membership, 30-days return or rufund Guarantee </h1>
                <div className="flex gap-5 cursor-pointer">
                    <a href="#"> SIGN IN </a>
                    <a href="#"> SIGN OUT  </a>
                </div>
            </div>

            <div className="bg-amber-100 flex justify-around items-center p-4 shadow-amber-400">
                <h1 className="text-2xl font-bold"> Filx </h1>
                <nav> 
                    <ul className="flex gap-8">
                        <li> <a href=""> Home </a></li>
                        <li> <a href=""> About </a></li>
                        <li> <a href=""> Movie </a></li>
                        <li> <a href=""> Contact  </a></li>
                    </ul>
                </nav>
            </div>

            
        </div>
    )
}