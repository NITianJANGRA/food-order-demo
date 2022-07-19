import MessageCard from "../components/MessageCard"
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
    },
    {
        path : "/orderSuccess",
        component : <MessageCard heading={`Order Placed Successfully !!!`} link={`/`} buttonText={`Order More`} />,
        exact : true
    },
    {
        path : "/orderError",
        component : <MessageCard heading={`Oops, Some error occured !!!`} link={`/cart`} buttonText={`Back to Cart`} />,
        exact : true
    }
]