import { Button, Divider } from "antd";
import kgMobility from "../../../assets/KG_Mobility.png"
import ssangyong from "../../../assets/SSangYong_blue.png"
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const Sections = () => {
    const navigate = useNavigate();
    const isBigger = useMediaQuery({ query: '(min-width: 1535px)' });
    return (
        <div className={`mt-10 mb-10 md:mx-6 md:mt-2 lg:mx-[50px] sm:mb-16`}>
            <div className={`md:flex md:items-center md:justify-between`}>
                <div>
                    <h2 className={`uppercase font-bold text-xl text-center md:text-left md:text-3xl 2xl:text-4xl`}>Conoce nuestros espacios digitales</h2>
                    <p className={`uppercase underline underline-offset-8 text-md text-center pb-2 md:text-left`}>Cada vez un paso mas cerca de nuestros clientes</p>
                </div>
                <div className="flex flex-1 items-center justify-center lg:justify-end gap-4">
                    <img src={kgMobility} alt="" width={160} className={``} />
                    <Divider type="vertical" className={`border-[#2F2482] border-2 h-16 -ml-4`} />
                    <img src={ssangyong} alt="" width={120} className={``} />
                </div>
            </div>

            <div className={`mx-5 sm:mx-24 md:mx-6`}>
                <div className={`flex flex-col-reverse gap-4 mt-8 md:flex-row lg:justify-between`}>

                    <div className={`md:flex-1`}>
                        <h2 className={`text-2xl tracking-wide text-center uppercase md:text-justify 2xl:text-3xl`}>Tienda Virtual</h2>
                        <p className={`text-center md:text-justify md:w-80 lg:w-96 2xl:text-xl`}>
                            {<b>Encuentra la pieza que necesitas aqui!</b>}<br />
                            Contamos con una gran variedad de repuestos para tu vehiculo a muy buenos precios entra aqui para conocer mas...
                        </p>
                        <Button danger size={isBigger ? "large": "middle"} className={`rounded-full mx-auto block mt-4 uppercase md:mx-0 2xl:text-xl`} > Click here </Button>
                    </div>
                    <div className={`h-36 w-72 bg-gray-500 mx-auto -skew-y-12 rotate-12 ${isBigger && "h-56 w-[600px]"}`}></div>
                </div>

                <div className={`flex flex-col-reverse gap-4 mt-8 md:flex-row`}>
                    <div className={`md:flex-1`}>
                        <h2 className={`text-2xl tracking-wide text-center uppercase md:text-justify 2xl:text-3xl`}>¿Quienes somos?</h2>
                        <p className={`text-center md:text-justify md:w-80 lg:w-96 2xl:text-xl`}>
                            {<b>Has parte de nuestra familia PUNTO KOREANO</b>}<br />
                            Conócenos a través de nuestra historia y visita nuestra tienda física.
                        </p>
                        <Button onClick={() => navigate('/about')} danger size={isBigger ? "large": "middle"} className={`rounded-full mx-auto block mt-4 uppercase md:mx-0 2xl:text-xl`} > Click here </Button>
                    </div>
                    <div className={`h-36 w-72 bg-gray-500 mx-auto -skew-y-12 rotate-12 ${isBigger && "h-56 w-[600px]"}`}>
                    </div>
                </div>

                <div className={`flex flex-col-reverse gap-4 mt-8 md:flex-row`}>
                    <div className={`md:flex-1`}>
                        <h2 className={`text-2xl tracking-wide text-center uppercase md:text-justify 2xl:text-3xl`}>Blog Interactivo</h2>
                        <p className={`text-center md:text-justify md:w-80 lg:w-96 2xl:text-xl`}>
                            {<b>Haste conocedor de los tips de cuidado mas importantes para tu vehículo</b>}
                        </p>
                        <Button danger size={isBigger ? "large": "middle"} className={`rounded-full mx-auto block mt-4 uppercase md:mx-0 2xl:text-xl`} > Click here </Button>
                    </div>
                    <div className={`h-36 w-72 bg-gray-500 mx-auto -skew-y-12 rotate-12 ${isBigger && "h-56 w-[600px]"}`}>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Sections;