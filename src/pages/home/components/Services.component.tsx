import { faHeadset, faTag, faTruck, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {

    const services = [
        { label: "Multiples medios de pago", icon: faWallet },
        { label: "Despacho a nivel nacional", icon: faTruck },
        { label: "Servicio técnico especializado", icon: faHeadset },
        { label: "Mejores precios del mercado", icon: faTag },
    ]

    return (
        <div className="bg-gradient-to-t from-indigo-300 flex flex-col gap-8 py-16 md:flex-row md:px-4 lg:px-8 xl:justify-around 2xl:pb-28">
            { services.map( (service, key) => (
                <div key={key} className="flex flex-col gap-2">
                    <FontAwesomeIcon icon={service.icon} className="text-4xl" color="#316BB4" />
                    <p className="text-2xl text-center italic">{ service.label }</p>
                </div> 
            ))}
        </div>
    )
}
export default Services;                      