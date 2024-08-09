import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useRef, useState } from "react";
import { Image } from "antd";

const images = [
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product1.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product2.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product3.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product4.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product5.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product6.webp",
];

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImagesView = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const swiperElRef = useRef<SwiperRef>(null);

    return (
        <div className="slider-container sm:mx-auto lg:w-1/2 mb-3">
            <Swiper
                loop={true}
                navigation={true}
                spaceBetween={10}
                modules={[FreeMode, Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
            >
                {images.map((image, idx) => (
                    <SwiperSlide key={`${image}-${idx}`}>
                        <Image
                            src={image}
                            alt={image}
                            rootClassName="w-full"
                            className="object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                ref={swiperElRef}
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {images.map((image, idx) => (
                    <SwiperSlide key={`${image}-${idx}-2`}>
                        <img
                            src={image}
                            alt={image}
                            className="cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default ImagesView;
