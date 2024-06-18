import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/home/Home.page";
import { ConfigProvider } from "antd";
import { useMediaQuery } from "react-responsive";
import About from "../pages/about/About.page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Store from "../pages/store/store.page";
import FilterStore from "../pages/store/components/Filter.component";
import ProductDetail from "../pages/product/ProductDetail";
import Checkout from "../components/checkout/Checkout.component";
import ThanksOrder from "../components/orders/Thanks.component";
import Blog from "../pages/blog/Blog.page";
import VehiclesBrand from "../pages/blog/components/Vehicles.component";
import Articules from "../pages/blog/components/Articules.component";
import BlogPost from "../pages/blog/components/Post.component";
import Cart from "../pages/cart/Cart.page";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Public routes */}
            <Route element={<PublicRoutes />} >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* store */}
                <Route path="/store/search" element={<FilterStore />} />
                <Route path="/store" element={<Store />} />
                <Route path="/store/product/:id" element={<ProductDetail />} />
                <Route path="/store/cart" element={<Cart />} />
                <Route path="/store/checkout" element={<Checkout />} />
                <Route path="/store/finish-order" element={<ThanksOrder />} />

                {/* Blog */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:brand/vehicles" element={<VehiclesBrand />} />
                <Route path="/blog/:brand/:vehicle/articles" element={<Articules />} />
                <Route path="/blog/post/:id" element={<BlogPost />} />
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
    const is576 = useMediaQuery({ query: '(min-width: 576px)' });
    const isXl = useMediaQuery({ query: '(min-width: 1280px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' }); 
    const queryClient = new QueryClient()

    return (
        <ConfigProvider theme={{
                token: {
                    fontFamily: "Cabin Condensed, sans-serif",
                    fontSize: isTabletOrMobile ? 14 : 18,

                },
                components: {
                    Button: {
                        colorPrimaryHover: `#E2000E`,
                        colorPrimaryActive: `#E2000E`,
                        colorBgTextHover: `#FFFFF`,
                        colorText: `#FFEC0C`,
                    },
                    Steps: {
                        customIconTop: isXl ? -4 : is576 ? -2 : .5,
                    },
                    Form: {
                        fontSize: 16
                    }
                }
            }}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />

                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </QueryClientProvider>
        </ConfigProvider>
    )
}
export default Routes;