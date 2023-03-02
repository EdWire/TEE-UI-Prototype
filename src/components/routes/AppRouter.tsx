import { Route } from "react-router"
import { Routes } from "react-router-dom"
import routes from "../../core/routes"
import HomePage from "../pages/HomePage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home.url} element={<HomePage />} />
        </Routes>
    )
}

export default AppRouter