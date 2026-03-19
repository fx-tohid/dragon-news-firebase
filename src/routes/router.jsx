import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'category/:id',
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loading />,
                element: <CategoryNews />,
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login,
            },
            {
                path: '/auth/register',
                Component: Register,
            }
        ]
    },
    {
        path: 'news-details/:id',
        loader: () => fetch('/news.json'),
        element: <PrivateRoute><NewsDetails /></PrivateRoute>,
        hydrateFallbackElement: <Loading />,
    }
])

export default router