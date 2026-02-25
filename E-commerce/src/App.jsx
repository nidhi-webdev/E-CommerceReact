import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/movie", element: <Movie /> },
    { path: "/contact", element: <Contact /> }
  ])

  return <h1> Hello React Router </h1>
}



export default App