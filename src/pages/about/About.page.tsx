import { WhatsAppOutlined } from "@ant-design/icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import axios from "axios";

const About = () => {

    const { isError, data } = useQuery({
        queryKey: ['consultants'],
        queryFn: async() => {
            return await axios.get(`${import.meta.env.VITE_API_REST_URL}/api/consultants`);
        }
    });

    return (
        <div className="px-5 lg:px-12">
            <h1 className="text-2xl text-center font-bold py-8 mb-2 lg:text-4xl">¿Quienes somos?</h1>

            <div className="lg:flex lg:items-center lg:mb-10 2xl:justify-around">
                <div>
                    <h2 className="text-xl text-center my-2 px-5 font-semibold underline lg:text-2xl 2xl:text-left">Misión</h2>
                    <p className="text-md text-justify px-5 lg:text-xl">Ofrecer a nuestros clientes un entorno confiable para la adquisición de autopartes Ssangyong transformando el concepto “tradicional” de compra y venta en una experiencia de atención cordial, amable, honesta y personalizada, proporcionada por parte de nuestro personal, suministrando a su vez información técnica y objetiva para el pronto hallazgo de la solución a las posibles dificultades mecánicas presentes en los vehículos y de esta manera garantizar ventas 100% justificadas.</p>
                </div>

                <img src="https://puntokoreano.com/images/fixcar.jpg" alt="mision" className="px-5 mt-6 sm:w-[500px] sm:mx-auto 2xl:w-1/2" />
            </div>

            <div className="lg:flex lg:flex-row-reverse lg:items-center 2xl:justify-around">
                <div>
                    <h2 className="text-xl text-center px-5 my-2 font-semibold underline lg:text-2xl 2xl:text-left">Visión</h2>
                    <p className="text-md text-justify px-5 lg:text-xl">En el 2027 esperamos haber fortalecido estratégicamente nuestra compañía a fin de seguir liderando el mercado nacional de autopartes Ssangyong entre los aliados comerciales autorizados de la marca. Adicional estimamos ampliar nuestro portafolio de productos del gremio automotriz y así apoyar el comercio de otras marcas de procedencia coreana que presentan un déficit de representación local; por último, aspiramos expandir la cobertura de nuestros servicios a nivel latinoamericano para suplir la demanda de nuestro público.</p>
                </div>

                <img src="https://puntokoreano.com/images/korando.jpg" alt="mision" className="px-5 mt-6 sm:w-[500px] sm:mx-auto 2xl:w-1/2" />
            </div>

            <div>
                <h2 className="text-xl text-center my-6 font-semibold lg:text-3xl">Nuestros asesores</h2>
                <div className="lg:flex lg:flex-wrap lg:justify-around">
                {
                    (!isError && data) && (
                        data.data.consultants?.map((consultant: Record<string, string>) => {
                            return (
                                <div className="my-8">
                                    <div className="border-2 border-[#E5E5E5] rounded-xl hover:border-[#E2000E] p-1 sm:w-[400px] sm:mx-auto 2xl:mb-3">
                                        <img src={consultant.image} alt={consultant.name} className="w-full object-cover object-top h-[350px] rounded-xl" />
                                    </div>
                                    <div>
                                        <p className="text-center text-xl font-bold">{ consultant.name }</p>
                                        <p className="text-center text-lg text-gray-400">Asesor</p>
                                    </div>
                                    <div className="flex items-center justify-center gap-6 mt-2">
                                        <Button className="rounded-full h-10 w-10 flex justify-center items-center">
                                            <WhatsAppOutlined />
                                        </Button>
                                        <Button className="rounded-full h-10 w-10 flex justify-center items-center">
                                            <FontAwesomeIcon icon={faEnvelope} className="" />
                                        </Button>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
                </div>
            </div>
        </div>
    )
};
export default About;