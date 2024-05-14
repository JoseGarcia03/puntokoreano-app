import { Divider } from "antd";
import cars from "../../../assets/ssangyong_cars.jpg"
import korea from "../../../assets/bandera_korea.png";
import alemania from "../../../assets/banera_alemania.png";
import colombia from "../../../assets/bandera_colombia.webp";
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 769px)' });

    return (
        <div className="flex flex-col">
            <div className="flex flex-nowrap w-full">
                <div className="h-2 bg-gradient-to-l from-[#BA861D] to-black flex-1" />
                <div className="h-2 bg-gradient-to-l from-[#21449A] to-black flex-1" />
                <div className="h-2 bg-gradient-to-l from-[#BA231D] to-black flex-1" />
            </div>
            <img src={cars} alt="cars" className="object-cover h-[25vh] w-full grayscale md:h-[40vh] lg:h-[50vh]" />
            <div className={`bg-[#161418] text-white flex flex-col items-center justify-center px-10 pt-5 pb-5 lg:flex-row lg:gap-2 lg:px-6 xl:justify-around`}>
                <h3 className="text-lg 2xl:text-2xl">PUNTO KOREANO S.A.S</h3>
                <Divider type={isTablet ? "horizontal" : "vertical"} className="border-white lg:h-10"/>
                <h3 className="text-lg 2xl:text-2xl">CL 63F #25 - 15 BOGOTA D.C </h3>
                <Divider type={isTablet ? "horizontal" : "vertical"} className="border-white lg:h-10" />
                <h3 className="text-lg 2xl:text-2xl">TEL: 7027821 - 7027735</h3>
                <Divider type={isTablet ? "horizontal" : "vertical"} className="border-white lg:h-10" />
                <h3 className="text-lg text-center lg:text-left lg:w-48 xl:w-64 2xl:text-2xl">Distribuidor autorizado Ssangyong Motor Colombia</h3>
                <Divider type={isTablet ? "horizontal" : "vertical"} />
                <div className="flex gap-4">
                    <img src={colombia} className="w-10 h-10 2xl:w-12 2xl:h-12" alt="Bandera Colombia"/>
                    <img src={korea} className="w-10 h-10 2xl:w-12 2xl:h-12" alt="Bandera Korea"/>
                    <img src={alemania} className="w-10 h-10 2xl:w-12 2xl:h-12" alt="Bandera Alemania"/>
                </div>
            </div>
        </div>
    )
};
export default Footer;