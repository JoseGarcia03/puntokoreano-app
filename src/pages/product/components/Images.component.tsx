import { Image } from "antd";

const images = [
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product1.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product2.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product3.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product4.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product5.webp",
    "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product6.webp",
]

const ImagesView = () => {
    const settings = {
        customPaging: function(i: number) {
          return (
            <a>
              <img src={`https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/big-product/product${i + 1}.webp`} />
            </a>
          );
        },
        dots: true,
        dotsClass: "d-flex",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };

    return (
        <div className="slider-container sm:mx-auto lg:w-1/2 mb-3">
            {/* <Slider {...settings}>
                {
                    images.map((src: string) => {
                        return (
                            <div className="mx-auto">
                                <Image src={src} alt="" />
                            </div>
                        )
                    })
                }
            </Slider> */}
        </div>
    )
}
export default ImagesView;