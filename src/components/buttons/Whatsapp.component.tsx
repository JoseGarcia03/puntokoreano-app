import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Popover } from "antd";

const WhatsAppButton = () => {

    const Title = () => (
        <div className="w-60">
            <figure className="flex gap-3 border-b pb-4">
                <Avatar size={64} src="https://static.elfsight.com/apps/all-in-one-chat/avatars/general.jpeg" />
                <div>
                    <figcaption className="text-xl">John Doe</figcaption>
                    <p className="text-md text-gray-400">Online</p>
                </div>
            </figure>
        </div>
    );

    const Content = () => (
        <div>
            <div className="bg-[#F3F3F3] w-fit rounded-md p-2">
                <p>Hola 👋</p>
                <p>¿En qué puedo ayudarle? <span className="text-sm text-gray-400">04:12 pm</span></p>
            </div>
        </div>
    );

    return (
        <Popover
        title={<Title />}
        content={<Content />}
        >
            <button className="fixed z-30 bottom-5 right-5 bg-green-600 rounded-full px-[12px] py-[9px]">
                <FontAwesomeIcon className="text-4xl xl:text-7xl text-white" icon={faWhatsapp} />
            </button>
        </Popover>
    )
}
export default WhatsAppButton;