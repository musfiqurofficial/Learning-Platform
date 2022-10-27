
import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Pages/Courses";
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
                loader: () => fetch(`http://localhost:5000/courses`),
                element: <Courses></Courses>,
            },
            {
                path: '/courses/:id',
                element: <SIngleCourse></SIngleCourse>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
            },
            {
                path: '/courses/cs/:id',
                element: <PurchasePage></PurchasePage>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/cs/${params.id}`),
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