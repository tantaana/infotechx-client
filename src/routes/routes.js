import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Sidebar from "../Pages/Courses/Sidebar/Sidebar";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Content from '../Pages/Courses/Content/Content'
import CourseContent from "../Pages/Courses/CourseContent/CourseContent";
import News from "../Pages/Courses/News/News";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Checkout from "../Pages/Checkout/Checkout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://infotechx-server.vercel.app/news')
            },
            {
                path: '/courses/:id',
                element: <CourseContent></CourseContent>,
                loader: ({ params }) => fetch(`https://infotechx-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`https://infotechx-server.vercel.app/news/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://infotechx-server.vercel.app/news/${params.id}`)

            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <h1 className="
                text-center mt-5 text-danger">Nothing found (click any link to go)</h1>
            }

        ]
    }
])