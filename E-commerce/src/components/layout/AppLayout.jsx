import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout = () => {
    const loadingNavigation = useNavigation()
    console.log(loadingNavigation);
    if (loadingNavigation.state === "loading") return <h1 className="font-extrabold text-6xl"> Loading.....</h1>



        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
}

export default AppLayout