import routes from "configs/router";
import { Navigate, RouteObject, useRoutes } from "react-router";
import React from "react";
import { BrowserRouter } from "react-router-dom";


export interface RouterProps {
    defaultRoute: string;
}

export const Routes = (props: RouterProps) => {
    const {defaultRoute} = props;
    const defaultRouteObject: RouteObject = {
        index: true,
        path: '/',
        element: <Navigate to={defaultRoute} />
    }

    const element = useRoutes([defaultRouteObject, ...routes]);
    return (
        <React.Suspense>
            {element}
        </React.Suspense>
    )
};


const Router = (props: RouterProps) => {
    return (
        <BrowserRouter>
            <Routes {...props} />
        </BrowserRouter>
    )
};


export default Router;