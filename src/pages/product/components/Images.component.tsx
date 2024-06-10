import React, {  useState } from "react";
import { Image } from "antd";

const images = [
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product1.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product2.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product3.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product4.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product5.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product6.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product1.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product2.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product3.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product4.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product5.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product6.webp"
]

const ImagesView = () => {
    const [ activeIdx, setActiveIdx ] = useState<number>(); 
    const [ currentImage, setCurrentImage ] = React.useState<string>("https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product1.webp");

    const handleClick = (src: string, idx: number) => {
        setCurrentImage(src);
        setActiveIdx(idx);
    }

    return (
        <div className="sm:mx-auto lg:w-1/2">
            <figure className="max-w-[500px] sm:w-4/5 sm:mx-auto">
                <Image src={currentImage}  />
            </figure>
            <section className="flex flex-nowrap gap-4 overflow-x-auto my-3">
                {
                    images.map((src: string, idx: number) => (
                        <div key={src} className={`${ activeIdx === idx ? "border-red-500" : "border-gray-300 "} border rounded-lg hover:border-red-500`}>
                            <Image
                            style={{ width: 120, height: 120, maxWidth: 300 }}
                            preview={false}
                            onClick={() => handleClick(src, idx)} src={src}
                            className="cursor-pointer object-cover rounded-lg"
                            />
                        </div>
                    ))
                }
            </section>
        </div>
    )
}
export default ImagesView;