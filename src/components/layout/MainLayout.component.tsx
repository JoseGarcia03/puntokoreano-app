import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Footer from "../../pages/home/components/Footer.component";
import { useState } from "react";
import CartModal from "../Modals/CartModal.component";
import WhatsAppButton from "../buttons/Whatsapp.component";
import WishlistModal from "../Modals/Wishlist.component";

import "./style.css";
import GroupsModal from "../Modals/GroupsModal.component";

interface Props {
  children: React.ReactElement;
}

export const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
  const isDesk = useMediaQuery({ query: "(min-width: 1024px)" });

  const [openCart, setOpenCart] = useState<boolean>(false);
  const [openWish, setOpenWish] = useState<boolean>(false);
  const [openGroups, setOpenGroups] = useState<boolean>(false);

  const handleOpenCarModal = () => setOpenCart(true);
  const handleOpenWishModal = () => setOpenWish(true);

  const items = [
    {
      key: 1,
      label: <Link to={"/"}>Inicio</Link>,
    },
    {
      key: 2,
      label: <Link to={"/store/search"}>Tienda</Link>,
    },
    {
      key: 3,
      label: <Link to={"/blog"}>Blog</Link>,
    },
    {
      key: 4,
      label: <Link to={"/about"}>Nosotros</Link>,
    },
  ];

  return (
    <Layout>
      <ScrollRestoration />
      <Header className="header">
        <div className={`${isTablet && "justify-between"} container-header`}>
          {location.pathname.includes("store") &&
            !location.pathname.includes("search") &&
            isTablet && (
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-white text-xl p-2 cursor-pointer"
                  onClick={() => setOpenGroups(true)}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-white text-xl p-2 cursor-pointer"
                />
              </div>
            )}
          <figure className="figure-logo" onClick={() => navigate("/")}>
            {(location.pathname === "/" ||
              location.pathname === "/store/search" ||
              !location.pathname.startsWith("/store") ||
              isDesk) && (
              <img
                className="logo"
                src="https://puntokoreano.com/images/logos/logo_1.png"
                alt="Punto Koreano Logo"
              />
            )}
            <figcaption className="figcaption-logo hover:text-b">
              Punto Koreano
            </figcaption>
          </figure>

          <div className="flex items-center">
            {(location.pathname === "/" ||
              location.pathname === "/store/search" ||
              !location.pathname.startsWith("/store") ||
              isDesk) && (
              <Menu
                className="header-menu"
                theme="dark"
                mode="horizontal"
                items={items}
                defaultSelectedKeys={["home"]}
                overflowedIndicator={
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-white"
                    size="xl"
                  />
                }
              />
            )}

            {((location.pathname.includes("store") &&
              !location.pathname.includes("search")) ||
              (isDesk && location.pathname.includes("store"))) && (
              <FontAwesomeIcon
                onClick={handleOpenWishModal}
                icon={faHeart}
                className="text-white text-xl p-2 cursor-pointer"
              />
            )}

            {((location.pathname.includes("store") &&
              !location.pathname.includes("search")) ||
              (isDesk && location.pathname.includes("store"))) && (
              <FontAwesomeIcon
                onClick={handleOpenCarModal}
                icon={faCartShopping}
                className="text-white text-xl p-2 cursor-pointer"
              />
            )}

            {(location.pathname === "/" ||
              location.pathname === "/store/search" ||
              !location.pathname.startsWith("/store") ||
              isDesk) && (
              <button className="user-btn">
                <FontAwesomeIcon
                  className="text-inherit"
                  icon={faUser}
                  size="xl"
                />
              </button>
            )}
          </div>
        </div>
      </Header>

      <Content className="relative">
        {children}

        <WhatsAppButton />
      </Content>

      {/* Modals */}
      <WishlistModal open={openWish} setOpen={setOpenWish} />
      <CartModal open={openCart} setOpen={setOpenCart} />
      <GroupsModal open={openGroups} setOpen={setOpenGroups} />

      <Footer />
    </Layout>
  );
};
export default MainLayout;
