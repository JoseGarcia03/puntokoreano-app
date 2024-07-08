import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

interface Props {
    inline?: boolean;
}

const CardProducts = ({ inline = false }: Props) => {
    const navigate = useNavigate();

    return (
        <div data-aos="fade-up" className="hover:-translate-y-4 transition duration-500 w-80 border rounded-lg relative cursor-pointer hover:border-[#E2060F] sm:w-64 md:w-72 xl:w-80">
            <div>
                {/* size of image is w-320px and h-320px smartphones */}
                <div className="bg-[#E2060F] absolute py-3.5 px-2 rounded-full text-white right-4 top-4 z-1"> 20% </div>
                <div className="h-80">
                    {
                        inline && <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/main-product/product1.webp" alt="" className="rounded-lg w-full h-80 sm:w-64 sm:h-auto xl:w-80 object-scale-down" />
                    }
                    { !inline && <Swiper
                    navigation
                    loop
                    modules={[Navigation, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    className="h-80"
                    >
                        <SwiperSlide>
                            <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/main-product/product1.webp" alt="" className="rounded-lg w-full h-80 sm:w-64 sm:h-auto xl:w-80 object-scale-down" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/main-product/product2.webp" alt="" className="rounded-lg w-full h-80 sm:w-64 sm:h-auto xl:w-80 object-scale-down" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/main-product/product3.webp" alt="" className="rounded-lg w-full h-80 sm:w-64 sm:h-auto xl:w-80 object-scale-down" />
                        </SwiperSlide>
                    </Swiper>}
                </div>
            </div>
            <div className="px-4" onClick={() => navigate('/store/product/1')}>
                <h3 className="font-bold text-xl">Filtro de aire de alto flujo</h3>
                <div className="flex gap-4 mb-4">
                    <h4 className="font-bold text-base text-[#E2060F]">$ 24.000 COP</h4>
                    <h4 className="text-base text-[#898686]">$ 30.000 COP</h4>
                </div>
            </div>
            <div className="px-4 mb-4">
                <button
                className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 text-white px-4 py-2 w-full rounded-lg">
                    Añadir al carrito
                </button>
            </div>
        </div>
    )
}
export default CardProducts;