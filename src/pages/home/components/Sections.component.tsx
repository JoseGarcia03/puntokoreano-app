import { Button, Divider } from "antd";
import kgMobility from "../../../assets/KG_Mobility.png"
import ssangyong from "../../../assets/SSangYong_blue.png"
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import './styles.css';

const Sections = () => {
    const navigate = useNavigate();
    const isBigger = useMediaQuery({ query: '(min-width: 1535px)' });
    return (
        <div className={`container-sections`}>
            <div className={`container-title`}>
                <div>
                    <h2>Conoce nuestros espacios digitales</h2>
                    <p>Cada vez un paso mas cerca de nuestros clientes</p>
                </div>
                <div className="flex flex-1 items-center justify-center lg:justify-end gap-4">
                    <img src={kgMobility} alt="" width={160} className={``} />
                    <Divider type="vertical" className={`border-[#2F2482] border-2 h-16 -ml-4`} />
                    <img src={ssangyong} alt="" width={120} className={``} />
                </div>
            </div>

            <div className={`container-main-sections`}>
                <div className={`flex flex-col-reverse gap-4 mt-8 md:flex-row lg:justify-between`}>

                    <div className={`md:flex-1`}>
                        <h2 className={`text-2xl tracking-wide text-center uppercase md:text-justify 2xl:text-3xl font-glegoo`}>Tienda Virtual</h2>
                        <p className={`text-center md:text-justify md:w-80 lg:w-96 2xl:text-xl font-exo`}>
                            {<b>Encuentra la pieza que necesitas aquí!</b>}<br />
                            Contamos con una gran variedad de repuestos para tu vehículo a muy buenos precios entra aquí para conocer mas...
                        </p>
                        <Button danger size={isBigger ? "large": "middle"} className={`rounded-full mx-auto block mt-4 uppercase md:mx-0 2xl:text-xl`} > Click here </Button>
                    </div>
                    <div className={`h-36 w-72 bg-gray-500 mx-auto -skew-y-12 rotate-12 ${isBigger && "h-80 w-[750px]"}`}></div>
                </div>

                <div className={`flex flex-col-reverse gap-4 mt-8 md:flex-row`}>
                    <div className={`md:flex-1`}>
                        <h2 className={`text-2xl tracking-wide text-center uppercase md:text-justify 2xl:text-3xl font-glegoo`}>¿Quienes somos?</h2>
                        <p className={`text-center md:text-justify md:w-80 lg:w-96 2xl:text-xl font-exo`}>
                            {<b>Has parte de nuestra familia PUNTO KOREANO</b>}<br />
                            Conócenos a través de nuestra historia y visita nuestra tienda física.
                        </p>
                        <Button onClick={() => navigate('/about')} danger size={isBigger ? "large": "middle"} className={`rounded-full mx-auto block mt-4 uppercase md:mx-0 2xl:text-xl`} > Click here </Button>
                    </div>
                    <div className={`h-36 w-72 bg-gray-500 mx-auto -skew-y-12 rotate-12 ${isBigger && "h-80 w-[750px]"}`}>
                    </div>
                </div>

                <div className={`flex flex-col-reverse gap-4 mt-8 md:flex-row`}>
                    <div className={`md:flex-1`}>
                        <h2 className={`text-2xl tracking-wide text-center uppercase md:text-justify 2xl:text-3xl font-glegoo`}>Blog Interactivo</h2>
                        <p className={`text-center md:text-justify md:w-80 lg:w-96 2xl:text-xl font-exo`}>
                            {<b>Haste conocedor de los tips de cuidado mas importantes para tu vehículo</b>}
                        </p>
                        <Button danger size={isBigger ? "large": "middle"} className={`rounded-full mx-auto block mt-4 uppercase md:mx-0 2xl:text-xl`} > Click here </Button>
                    </div>
                    <div className={`h-36 w-72 bg-gray-500 mx-auto -skew-y-12 rotate-12 ${isBigger && "h-80 w-[750px]"}`}>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sections;