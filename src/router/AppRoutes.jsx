import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AppRouter } from './AppRouter';
import { Login } from '../auth/pages/Login';


const router = createBrowserRouter([
  {
      path: "login/*",
      element: <PublicRoute />,
      children: [{
        path: "*",
        element: <Login />,
      }]
  },    
  {
      path: "/*",
      element: <PublicRoute />,
      children: [{
        path: "*",
        element: <AppRouter />,
      }]
  },    
])


export const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}
