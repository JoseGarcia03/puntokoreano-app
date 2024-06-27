import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HomeCarousel = () => {
        return (
            <Swiper
            navigation
            loop
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className='h-44 sm:h-96 lg:h-[60vh] xl:h-[80vh]'
            >
                <SwiperSlide>
                    <img
                    src="https://puntokoreano.com/images/carrousel/KORANDO.jpg"
                    alt="korando"
                    className="h-44 sm:h-96 xl:h-[80vh] lg:h-[60vh] w-full object-cover brightness-[.2]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    src="https://puntokoreano.com/images/carrousel/REXTON.webp"
                    alt="rexton"
                    className="h-44 sm:h-96 xl:h-[80vh] lg:h-[60vh] w-full object-cover brightness-[.2]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    src="https://puntokoreano.com/images/carrousel/TIVOLI.jpg"
                    alt="tivoli"
                    className="h-44 sm:h-96 xl:h-[80vh] lg:h-[60vh] w-full object-cover brightness-[.2]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    src="https://puntokoreano.com/images/carrousel/TORRES.jpg"
                    alt="torres"
                    className="h-44 sm:h-96 xl:h-[80vh] lg:h-[60vh] w-full object-cover brightness-[.2]"
                    />
                </SwiperSlide>
            </Swiper>
        )
}
export default HomeCarousel;