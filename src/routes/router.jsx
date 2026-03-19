import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path:'/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json')
            }
        ]
    }, 
    {
        path: '/auth',
        element: <h2>AUth</h2>
    }
])

export default router