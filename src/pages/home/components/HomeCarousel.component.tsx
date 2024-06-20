import { Carousel } from "antd";

export const HomeCarousel = () => {
        return (
            <Carousel dots={false} dotPosition="top" autoplay arrows lazyLoad="anticipated">
                <div> <img src="https://puntokoreano.com/images/examples/example_carrousel_3.jpg" alt="ssangyong" className="xl:h-[80vh] w-full object-cover" /></div>
                <div> <img src="https://puntokoreano.com/images/examples/example_carrousel_1.jpg" alt="ssangyong" className="xl:h-[80vh] w-full object-cover" /></div>
                <div> <img src="https://puntokoreano.com/images/examples/example_carrousel_2.jpg" alt="ssangyong" className="xl:h-[80vh] w-full object-cover" /></div>
            </Carousel>
        )
}
export default HomeCarousel;