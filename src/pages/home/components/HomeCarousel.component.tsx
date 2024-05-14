import { Carousel } from "antd";

export const HomeCarousel = () => {
        return (
            <Carousel dots={false}>
                <div> <img src="https://cdn.motor1.com/images/mgl/kprv4/s1/ssangyong-j100.jpg" alt="ssangyong" className="xl:h-[55vh] w-full object-cover" /></div>
            </Carousel>
            // <div>
            //     <img src="https://cdn.motor1.com/images/mgl/kprv4/s1/ssangyong-j100.jpg" alt="ssangyong" className="xl:h-[55vh] w-full object-cover" />
            // </div>
        )
}
export default HomeCarousel;