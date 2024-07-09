import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardProducts from "./CardProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper/modules";

interface Props {
    inline?: boolean;
}

import 'swiper/css';

const SectionProducts = ({ inline }: Props) => {
    const sm = useMediaQuery({ query: '(min-width: 640px)' });
    const md = useMediaQuery({ query: '(min-width: 768px)' });
    const lg = useMediaQuery({ query: '(min-width: 1024px)' });
    const xl = useMediaQuery({ query: '(min-width: 1280px)' });
    const xl2 = useMediaQuery({ query: '(min-width: 1536px)' });
    const xl3 = useMediaQuery({ query: '(min-width: 1800px)' });

    return (
        <div className="mx-5 mb-10 max-w-[1320px] lg:px-10 xl:mx-auto lg:mx-auto">
            <div className="flex items-center gap-2 mt-2 py-2 border-b border-b-[#e5e5e5] mb-5">
                <FontAwesomeIcon icon={faCircle} className="text-[#E2060F] text-sm p-1 border rounded-full border-[#E2060F]" />
                <h2 className="text-xl uppercase lg:text-2xl"><strong>Productos</strong> populares</h2>
            </div>
            {
                inline && (
                    <Swiper
                        data-aos={inline && "fade-left"}
                        navigation
                        loop
                        modules={[ Navigation ]}
                        slidesPerView={xl3 ? 3 : xl2 ? 3 : xl ? 3 : lg ? 3 : md ? 2 : sm ? 2 : 1}
                        spaceBetween={20}
                        style={{
                            '--swiper-navigation-size': "30px",
                        } as Record<string, any>}
                    >
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProducts inline />
                        </SwiperSlide>
                    </Swiper>
                )
            }
            {
                !inline && (
                    <div className={`flex justify-center flex-wrap gap-8 lg:justify-evenly ${inline && "flex-nowrap" }`}>
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                        <CardProducts />
                    </div>
                )
            }
        </div>
    )
}
export default SectionProducts;