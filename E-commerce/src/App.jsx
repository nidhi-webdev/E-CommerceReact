import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <Home />}
  ])

  return <h1> Hello React Router </h1>
}



export default App