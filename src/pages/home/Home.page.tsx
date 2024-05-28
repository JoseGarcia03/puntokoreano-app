import { Divider } from "antd";
import HomeCarousel from "./components/HomeCarousel.component";
import korea from "../../assets/bandera_korea.png";
import alemania from "../../assets/banera_alemania.png";
import ssangyong from "../../assets/ssangyong.png";
import Services from "./components/Services.component";
import { useMediaQuery } from "react-responsive";
import Sections from "./components/Sections.component";

export const Home = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1023px)' });
    return (
        <div>
            <HomeCarousel />

            <div className={`z-0 relative justify-around bg-[#2F2482] text-white flex flex-col items-center py-8 md:flex-row md:px-4 md:py-6 md:-mt-10 md:mx-4 md:rounded-md lg:-mt-24 lg:mx-10`}>
                <div className={`md:flex md:items-center md:gap-2 lg:gap-4 xl:gap-8`}>
                    <img src={korea} alt="korea" width={ isMobile ? 90 : isTablet ? 90 : 120 } />
                    <Divider type={ isMobile ? "horizontal" : "vertical" } className={`${ isMobile ? "" : "h-16 border-2"} border-white`} />
                </div>
                <div className={`flex flex-col items-center gap-8 md:flex-row xl:gap-20`}>
                    <h2 className={`text-xl lg:text-2xl 2xl:text-4xl`}>DISTRIBUIDOR</h2>
                    <div className={`flex flex-col items-center gap-4`}>
                        <img src={ssangyong} alt="ssangyong" width={ isMobile ? 90 : isTablet ? 130 : 180 } />
                        <h3 className={`text-md xl:text-xl 2xl:text-2xl`}>Originalidad, sinceridad y respaldo</h3>
                    </div>
                    <h2 className={`text-xl font-bold lg:text-2xl 2xl:text-4xl`}>AUTORIZADO</h2>
                </div>
                <div className={`md:flex md:items-center md:gap-2 lg:gap-4 xl:gap-8`}>
                    <Divider type={ isMobile ? "horizontal" : "vertical" } className={`${ isMobile ? "" : "h-16 border-2"} border-white`} />
                    <img src={alemania} alt="korea" width={ isMobile ? 90 : isTablet ? 90 : 120 } />
                </div>
            </div>

            <Services />

            <Sections />
        </div>
    )
};
export default Home;