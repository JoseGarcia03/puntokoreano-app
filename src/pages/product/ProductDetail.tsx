import { Image, Space, Tabs } from "antd";
import CountReview from "../store/components/CountReview.component";
import ImagesView from "./components/Images.component";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import DescriptionProduct from "./components/Description.component";
import ReviewsProduct from "./components/Reviews.component";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SectionProducts from "../store/components/SectionProducts.component";
import ArticuleRelation from "./components/ArticulesRelation.component";
import Applies from "./components/Applies.component";

const ProductDetail = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState<string>("1");
    const inputRef = useRef<HTMLInputElement>(null);

    const tabs = [
        {
            key: "1",
            label: "Descripcion",
            children: <DescriptionProduct />,
        },
        {
            key: "2",
            label: "Calificaciones",
            children: <ReviewsProduct />,
        },
        {
            key: "3",
            label: "Artículos relacionados",
            children: <ArticuleRelation />,
        },
        {
            key: "4",
            label: "Aplicaciones",
            children: <Applies />,
        },
    ];

    const handleClicPlus = () => {
        setCount(`${Number(count) + 1}`);
    };

    const handleClicRest = () => {
        Number(count) > 1 && setCount(`${Number(count) - 1}`);
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.width = `${count.length * 10 + 2}px`;
        }
    }, [count]);

    return (
        <div className="px-5 mb-10 max-w-[1280px] lg:mx-auto lg:px-10">
            <div
                className="flex items-center gap-2 mb-4 w-fit mt-5 cursor-pointer"
                onClick={() => navigate("/store")}
            >
                <FontAwesomeIcon icon={faArrowLeft} className="text-base" />
                <p className="text-lg font-semibold">Tienda</p>
            </div>
            <section className="mt-5 lg:flex lg:gap-5 2xl:w-[1280px] 2xl:mx-auto ">
                <ImagesView />
                <div>
                    <h1 className="font-bold text-xl mb-2 lg:text-2xl">
                        Filtro de aire de alto flujo
                    </h1>
                    <div className="flex gap-4">
                        <h4 className="font-bold text-base text-[#E2060F]">
                            $ 24.000 COP
                        </h4>
                        <h4 className="text-base text-[#898686]">
                            $ 30.000 COP
                        </h4>
                    </div>
                    <CountReview />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus libero earum ipsum dolore. Quibusdam quas
                        laudantium placeat, iste accusantium laboriosam maiores,
                        quos quisquam ab, optio ut. Veniam, ipsa. Pariatur, quo!
                    </p>
                    <Space className="mt-4 gap-8">
                        <Space className="gap-0">
                            <button
                                onClick={handleClicRest}
                                className="w-8 h-10 bg-gray-300 rounded-l-full font-bold text-xl flex justify-center items-center"
                            >
                                -
                            </button>
                            <input
                                ref={inputRef}
                                value={count}
                                type="number"
                                className="outline-none h-10 px-2 w-2 text-lg font-bold text-center box-content"
                                readOnly
                            />
                            <button
                                onClick={handleClicPlus}
                                className="w-8 h-10 bg-gray-300 rounded-r-full font-bold text-xl flex justify-center items-center"
                            >
                                +
                            </button>
                        </Space>
                        <button className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 text-white px-4 py-2 rounded-full outline-none text-md font-semibold">
                            Añadir al carrito
                        </button>
                    </Space>

                    <Space className="mt-4 flex items-center cursor-pointer w-fit hover:text-[#E2060F]">
                        <FontAwesomeIcon icon={faHeart} className="text-lg" />
                        <p className="text-base">Añadir a la lista de deseos</p>
                    </Space>

                    <button className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 text-white block w-full py-2 rounded-full font-semibold text-base mt-2">
                        Comprar ahora
                    </button>

                    <Space className="flex flex-col justify-start items-start">
                        <p className="mt-2 font-bold text-base">
                            Pago seguro garantizado
                        </p>
                        <Image
                            preview={false}
                            src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/other/safe-checkout.webp"
                        />
                    </Space>
                </div>
            </section>
            <div className="w-full 2xl:w-[1280px] 2xl:mx-auto">
                <Tabs defaultActiveKey="1" items={tabs} />
            </div>
            <div>
                <SectionProducts inline />
            </div>
        </div>
    );
};
export default ProductDetail;
