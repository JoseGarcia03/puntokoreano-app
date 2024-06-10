import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatsAppButton = () => {
    return (
        <button className="fixed z-30 bottom-5 right-5 bg-green-600 rounded-full px-[12px] py-[9px]">
            <FontAwesomeIcon className="text-3xl text-white" icon={faWhatsapp} />
        </button>
    )
}
export default WhatsAppButton;