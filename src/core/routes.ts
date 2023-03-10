interface Route {
    url: string
    name: string
}

interface AppRoute {
    [key: string]: Route
}

const routes: AppRoute = {
    home: { url: '/', name: 'Home' },
    customers: { url: '/customers', name: 'Customers' }
}

export default routes