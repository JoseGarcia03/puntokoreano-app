import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QRCode } from "antd";

interface Props {
    asesor: {
        name: string;
        image: string;
        position: string;
    }
}

const DigitalCardDesktop = ({ asesor }: Props) => {
    return (
        <section>
            <figcaption
            className="w-full h-40 relative"
            >
                <img
                className="absolute h-40 w-full object-cover grayscale rounded-2xl"
                src="https://puntokoreano.com/images/carrousel/KORANDO.jpg"
                alt=""
                />
                <img
                className="relative w-20"
                src="https://puntokoreano.com/images/logos/logo_1.png"
                alt="Punto Koreano Logo"
                />
            </figcaption>

            <div
            className="relative bg-cardInfo rounded-2xl px-4 pt-8 pb-4 mt-2"
            >
                <figure
                className="w-40 h-40 absolute -top-24 right-1"
                >
                    <img
                    className="w-full h-full object-cover object-top rounded-full border-2 border-solid border-card"
                    src={ asesor.image }
                    alt={ asesor.name }
                    />
                </figure>

                <article>
                    <h2 className="text-xl my-1">Tarjeta Virtual</h2>
                    <p className="text-base font-bold my-1">{ asesor.name }</p>
                    <h3 className="text-xl my-1">{ asesor.position }</h3>
                    <p className="text-base font-bold my-1">Punto Koreano, Inc</p>
                </article>
            </div>

            <section>
                <QRCode
                className="mx-auto mt-4"
                value="https://ant.design/"
                size={130}
                />
            </section>

            <button
            className="flex gap-2 border-none bg-black text-white
            items-center px-2 py-3 rounded-3xl mx-auto my-2 max-w-72
            w-full justify-center text-lg"
            >
                <FontAwesomeIcon icon={faMobileScreen} />
                Escanea y hablemos
            </button>

        </section>
    );
};
export default DigitalCardDesktop;