import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.component";

const PrivateRoutes = () => {
    const [ auth ] = React.useState<boolean>(false);

    return auth ? <MainLayout><Outlet /></MainLayout> : <Navigate to="/" />
}
export default PrivateRoutes;