import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Movie from "./pages/Movie"
import About from "./pages/About"
import { AppLayout } from "./components/layout/AppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { getMovieData } from "./api/GetApiData"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/movie", element: <Movie />, loader: getMovieData, },
        { path: "/contact", element: <Contact /> }
      ]
    }

  ])

  return <RouterProvider router={router} />
}



export default App