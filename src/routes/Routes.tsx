import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/home/Home.page";
import { ConfigProvider } from "antd";
import { useMediaQuery } from "react-responsive";
import About from "../pages/about/About.page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Public routes */}
            <Route element={<PublicRoutes />} >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>

            {/* Private routes */}
            <Route element={<PrivateRoutes />} >

            </Route>

            {/* Redirect */}
            <Route path="*" element={<Navigate to="/" />} />
        </>
    )
)

const Routes = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' }); 
    const queryClient = new QueryClient()

    return (
        <ConfigProvider theme={{
                token: {
                    fontFamily: "Cabin Condensed, sans-serif",
                    fontSize: isTabletOrMobile ? 14 : 18 
                },
                components: {
                    Button: {
                        colorPrimaryHover: `#E2000E`,
                        colorPrimaryActive: `#E2000E`
                    }
                }
            }}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ConfigProvider>
    )
}
export default Routes;