import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

interface Product {
    _id: string;
    name: string;
    price: number;
    group: string;
    subgroup: string;
    stock: number;
    code: number;
    shipping: string[];
    images: string[];
    active: boolean;
}

interface Props {
    inline?: boolean;
    product: Product;
}

const CardProducts = ({ inline = false, product }: Props) => {
    const navigate = useNavigate();

    return (
        <div
            className={`${
                !inline &&
                "transition duration-300 hover:-translate-y-4 hover:shadow-2xl"
            }`}
        >
            <div
                data-aos={!inline && "fade-up"}
                className="transition duration-500 w-80 border rounded-lg relative cursor-pointer hover:border-[#E2060F] sm:w-64 md:w-72 xl:w-80"
            >
                <div>
                    {/* size of image is w-320px and h-320px smartphones */}
                    <div className="bg-[#E2060F] absolute py-3.5 px-2 rounded-full text-white right-4 top-4 z-1">
                        {" "}
                        20%{" "}
                    </div>
                    <div className="h-80">
                        {inline && (
                            <img
                                onClick={() =>
                                    navigate(`/store/product/${product._id}`)
                                }
                                src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/main-product/product1.webp"
                                alt=""
                                className="rounded-lg w-full h-80 sm:w-64 sm:h-auto xl:w-80 object-scale-down"
                            />
                        )}
                        {!inline && (
                            <Swiper
                                navigation
                                loop
                                modules={[Navigation, Pagination]}
                                pagination={{
                                    clickable: true,
                                }}
                                style={
                                    {
                                        "--swiper-navigation-size": "30px",
                                        "--swiper-navigation-sides-offset":
                                            "10px",
                                    } as React.CSSProperties
                                }
                                className="h-80"
                                onClick={() =>
                                    navigate(`/store/product/${product._id}`)
                                }
                            >
                                {product.images.map((image, idx) => (
                                    <SwiperSlide
                                        key={`${idx}-image-${product._id}`}
                                    >
                                        <img
                                            src={image}
                                            alt={product.name}
                                            className="rounded-lg w-full h-80 sm:w-64 sm:h-auto xl:w-80 object-scale-down"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>
                <div
                    className="px-4"
                    onClick={() => navigate(`/store/product/${product._id}`)}
                >
                    <h3 className="font-bold text-xl">{product.name}</h3>
                    <div className="flex gap-4 mb-4">
                        <h4 className="font-bold text-base text-[#E2060F]">
                            $ {product.price.toLocaleString()} COP
                        </h4>
                        {/* <h4 className="text-base text-[#898686]">
                            $ 30.000 COP
                        </h4> */}
                    </div>
                </div>
                <div className="px-4 mb-4">
                    <button className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 text-white px-4 py-2 w-full rounded-lg">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CardProducts;
