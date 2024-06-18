import { Avatar, Flex, Layout, Menu } from "antd";
import Logo from "../../assets/logo-512x512.png";
import { Content, Header } from "antd/es/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faHeart, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../pages/home/components/Footer.component";
import { useState } from "react";
import CartModal from "../Modals/CartModal.component";
import WhatsAppButton from "../buttons/Whatsapp.component";
import WishlistModal from "../Modals/Wishlist.component";

interface Props {
    children: React.ReactElement
}


export const MainLayout = ({ children }: Props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1023px)' });

    const [ openCart, setOpenCart ] = useState<boolean>(false);
    const [ openWish, setOpenWish ] = useState<boolean>(false);

    const handleOpenCarModal = () => setOpenCart(true);
    const handleOpenWishModal = () => setOpenWish(true);

    const items = [
        {
            key: 1,
            label: (<Link to={"/"}>Inicio</Link>)
        },
        {
            key: 2,
            label: (<Link to={"/store/search"}>Tienda</Link>)
        },
        {
            key: 3,
            label: (<Link to={"/blog"}>Blog</Link>)
        },
        {
            key: 4,
            label: (<Link to={"/about"}>Nosotros</Link>)
        }
    ]

    return (
        <Layout>
             <ScrollRestoration />
            <Header
                className={`flex justify-between items-center ${(isMobile || isTablet) && "px-5"} sticky z-20 top-0`} 
            >
                <Flex align="center" gap={10} className="w-fit text-white flex-1">
                    <img src={Logo} width={50} onClick={() => navigate('/')} className="cursor-pointer" />
                    <h2 className="text-xl md:text-2xl w-36 cursor-pointer" onClick={() => navigate('/')}>Punto Koreano</h2>
                </Flex>
                <Flex align="center" justify={"flex-end"}>
                    {!location.pathname.includes('store') && <Menu
                    defaultSelectedKeys={['1']}
                    className={`w-16 sm:w-48 md:w-72 lg:w-80`}
                    theme="dark"
                    mode="horizontal"
                    items={items}
                    overflowedIndicator={<FontAwesomeIcon icon={faBars} />}
                    />}
                    { (location.pathname.includes('store') && !location.pathname.includes('search')) &&
                        <FontAwesomeIcon
                        icon={faSearch}
                        className="text-white text-xl p-2 cursor-pointer"
                        /> 
                    }
                    { location.pathname.includes('store') &&
                        <FontAwesomeIcon
                        onClick={handleOpenWishModal}
                        icon={faHeart}
                        className="text-white text-xl p-2 cursor-pointer"
                        />
                    }
                    { location.pathname.includes('store') &&
                        <FontAwesomeIcon
                        onClick={handleOpenCarModal}
                        icon={faCartShopping}
                        className="text-white text-xl p-2 cursor-pointer"
                        />
                    }
                    <Avatar
                    size="large"
                    icon={<FontAwesomeIcon icon={faUserCircle} />}
                    className="cursor-pointer"
                    />
                </Flex>
            </Header>
            <Content>
                { children }
            </Content>

            {/* Modals */}
            <WishlistModal open={openWish} setOpen={setOpenWish} />
            <CartModal open={openCart} setOpen={setOpenCart} />


            {/* Buttons */}
            <WhatsAppButton />
            <Footer />
        </Layout>
    )
}
export default MainLayout;