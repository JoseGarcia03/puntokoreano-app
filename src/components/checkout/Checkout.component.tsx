import { faCreditCard, faFileInvoice, faMapLocation, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StepProps, Steps, StepsProps } from "antd";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Contact from "./Contact.component";
import Shipping from "./Shipping.component";
import Orders from "./Order.component";
import Billing from "./Billing.component";

const Checkout = () => {
    const is576 = useMediaQuery({ query: '(min-width: 576px)' });
    const [ current, setCurrent ] = useState<number>(0);
    const [ status, setStatus ] = useState<StepsProps["status"]>("process");

    const steps: StepProps[] = [
        {
            title: "Contacto",
            icon: <FontAwesomeIcon icon={faUser} className="text-base xl:text-xl" />,
            style: { width: 70 },
        },
        {
            title: "Envío",
            icon: <FontAwesomeIcon icon={faMapLocation} className="text-base xl:text-xl" />,
            style: { width: 70 }
        },
        {
            title: "Facturación",
            icon: <FontAwesomeIcon icon={faFileInvoice} className="text-base xl:text-xl" />,
            style: { width: 70 }
        },
        {
            title: "Pago",
            icon: <FontAwesomeIcon icon={faCreditCard} className="text-base xl:text-xl" />,
        }
    ];

    useEffect(() => setStatus('process'), [current]);

    return (
        <section className="m-5 lg:mx-auto lg:flex lg:gap-4 xl:max-w-[1250px]">
            <div className="lg:w-3/5">
                <div className="flex sm:justify-center lg:max-w-[550px] xl:max-w-full">
                    <Steps
                    progressDot={!is576}
                    style={ is576 ? {  }: { display: "flex", flexDirection: "row" } }
                    status={status}
                    current={current}
                    items={steps}
                    type={ is576 ? "navigation" : "default" }
                    size="small"
                    responsive={false}
                    direction="horizontal"
                    />
                </div>
                {
                    current === 0 && <Contact setStatus={setStatus} setCurrent={setCurrent} />
                }
                {
                    current === 1 && <Shipping setStatus={setStatus} setCurrent={setCurrent} />
                }
                {
                    current === 2 && <Billing setStatus={setStatus} setCurrent={setCurrent} />
                }
            </div>
            <Orders />
        </section>
    )
};
export default Checkout;