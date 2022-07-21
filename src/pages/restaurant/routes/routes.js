import MessageCard from "../components/MessageCard"
import CartPage from "../CartPage"
import HomePage from "../HomePage"

export const ROUTES = [
    {
        path : "/",
        component : <HomePage />,
        exact : true
    },
    {
        path : "/cart",
        component : <CartPage />,
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