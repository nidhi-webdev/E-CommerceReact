import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Movie from "./pages/Movie"
import About from "./pages/About"
import { AppLayout } from "./components/layout/AppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { getMovieData } from "./api/GetApiData"
import { MovieDetails } from "./components/UI/MovieDetails"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      hydrateFallbackElement: <h1 className="font-extrabold text-6xl">Loading Application...</h1>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/movie", element: <Movie />, loader: getMovieData, },
        { path: "/movie/:movieId", element: <MovieDetails /> },
        { path: "/contact", element: <Contact /> }
      ]
    }

  ])

  return <RouterProvider router={router} />
}



export default App