import { paths } from "constants/paths";
import React  from 'react';
import { Navigate, Outlet, RouteObject } from "react-router";

const Home = React.lazy(() => import('pages/HomePage'))

const extendRoutes: RouteObject[] = [
    {
        index: true,
        path: paths.home,
        element: <Home />
    }
];


const routes: RouteObject[] = [
    {
        path: paths.default,
        element: <>
            <Outlet/>
        </>,
        children: [
            ...extendRoutes,
            {
                path: "*",
                element: <Navigate to={paths.home} />
            }
        ]
    }
];

export default routes;