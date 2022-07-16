import Cart from "../pages/Cart"
import Home from "../pages/Home/index.jsx"

export const ROUTES = [
    {
        path : "/",
        component : <Home />,
        exact : true
    },
    {
        path : "/cart",
        component : <Cart />,
        exact : true
    }
]