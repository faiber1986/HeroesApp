import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Marvel, DC, Hero, Search } from "../heroes";
import { Login } from "../auth/pages/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Marvel />
    },    
    {
        path: "marvel",
        element: <Marvel />
    },    
    {
        path: "dc",
        element: <DC />
    },       
    {
        path: "hero/:id",
        element: <Hero />
    },    
    {
        path: "search",
        element: <Search />
    },     
    {
        path: "login",
        element: <Login />
    },     
]);

export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
            <Outlet />
        </>
    )
}
