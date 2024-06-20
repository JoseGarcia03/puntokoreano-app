import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VirtualCard = () => {
    return (
        <>
            <figure className="max-w-96 my-1 rounded-lg mx-auto">
                <img src="https://puntokoreano.com/images/logo-512x512.png" alt="logo" className="w-20 block mx-auto"/>

                <div className="grayscale mt-2">
                    <img
                    className="brightness-50 w-full h-48 object-cover"
                    src="https://puntokoreano.com/images/ssangyong-rexton-g4.webp"
                    alt="banner"
                    />
                </div>
                <section className="bg-[#E8E6E7] pb-10">
                    <img
                    className="object-top object-cover w-56 h-56 rounded-full border-2 border-[#FB0704] -mt-28 relative z-10 mx-auto"
                    src="https://puntokoreano.com/images/asesores/9803.jpg" alt="asesor"
                    />
                    <h3
                    className="text-2xl font-bold border-b-2 border-gray-500 text-center mx-10 mt-5"
                    >
                        John Doe
                    </h3>
                    <p
                    className="text-center text-gray-500 text-base mt"
                    >
                        Gerente Comercial / Asesor
                    </p>
                </section>

                <section className="mt-5 flex justify-around">
                    <div>
                        <div className="bg-[#E2060F] py-3 px-4 rounded-full">
                            <FontAwesomeIcon size="3x" className="text-white" icon={faMobile} />
                        </div>
                        <p className="text-gray-500 text-center mt-3 text-base font-bold">Llamar</p>
                    </div>
                    <div>
                        <div className="bg-[#E2060F] py-3 px-4 rounded-full">
                            <FontAwesomeIcon size="3x" className="text-white" icon={faWhatsapp} />
                        </div>
                        <p className="text-gray-500 text-center mt-3 text-base font-bold">Escribir</p>
                    </div>
                </section>
            </figure>
        </>
    )
}
export default VirtualCard;