import { Route } from "react-router"
import { Routes } from "react-router-dom"
import routes from "../../core/routes"
import CustomerPage from "../pages/CustomerPage"
import HomePage from "../pages/HomePage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home.url} element={<HomePage />} />
            <Route path={routes.customers.url} element={<CustomerPage />} />
        </Routes>
    )
}

export default AppRouter