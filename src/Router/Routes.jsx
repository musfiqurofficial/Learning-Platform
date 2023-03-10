
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/Common/PrivateRoute";
import Blog from "../components/Pages/Blog";
import Courses from "../components/Pages/Courses";
import FAQ from "../components/Pages/FAQ";
import Home from "../components/Pages/Home";
import PurchasePage from "../components/Pages/PurchasePage";
import SignIn from "../components/Pages/SignIn";
import SignUp from "../components/Pages/SignUp";
import SIngleCourse from "../components/Pages/SIngleCourse";
import ErrorPage from "../ErrorPage";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                loader: () => fetch(`https://assingment-10-server-alpha.vercel.app/courses`),
                element: <Courses></Courses>,
            },
            {
                path: '/courses/:id',
                element: <SIngleCourse></SIngleCourse>,
                loader: ({ params }) => fetch(`https://assingment-10-server-alpha.vercel.app/courses/${params.id}`),
            },
            {
                path: '/courses/cs/:id',
                element: <PrivateRoute><PurchasePage></PurchasePage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assingment-10-server-alpha.vercel.app/courses/cs/${params.id}`),
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>,
            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>,
            },
        ]
    }
])