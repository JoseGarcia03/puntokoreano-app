import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormProps, Input, InputNumber, Select } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
    setStatus:React.Dispatch<React.SetStateAction<"wait" | "process" | "finish" | "error" | undefined>>
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

type FieldType = {
    shippingMethod: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
}

const Shipping = ({ setStatus, setCurrent }: Props) => {
    const navigate = useNavigate();
    const onFinish: FormProps<FieldType>['onFinish'] = () => {
        setCurrent(2);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
        setStatus('error');
    }

    const handleBack = () => {
        setCurrent(0);
    }

    const { Option } = Select;
    return (
        <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="border rounded-lg p-4 mt-5 bg-white"
        >
            <h1 className="text-xl text-center font-bold">Datos de envío</h1>

            <Form.Item<FieldType>
            name="shippingMethod"
            extra="Puede afectar el costo total de su pedido"
            label="Tipo de envío"
            hasFeedback
            validateDebounce={1000}
            rules={[{ required: true, message: "" }]}
            >
                <Select>
                    <Option value="express">Envío exprés</Option>
                    <Option value="standard">Envío estándar</Option>
                    <Option value="pickup">Recogida en tienda</Option>
                </Select>
            </Form.Item>
            <Form.Item<FieldType>
            name="address"
            label="Dirección"
            hasFeedback
            validateDebounce={1000}
            rules={[{ required: true, message: "" }]}
            >
                <Input placeholder="DG 1 BIS #23-56 sur torre 1 apto 506" />
            </Form.Item>
            <Form.Item<FieldType>
            name="city"
            label="Ciudad"
            hasFeedback
            validateDebounce={1000}
            rules={[{ required: true, message: "" }]}
            >
                <Input placeholder="DG 1 BIS #23-56 sur torre 1 apto 506" />
            </Form.Item>
            <Form.Item<FieldType>
            name="country"
            label="País"
            hasFeedback
            validateDebounce={1000}
            rules={[{ required: true, message: "" }]}
            >
                <Select>
                    <Option value="colombia">Colombia</Option>
                </Select>
            </Form.Item>
            <Form.Item<FieldType>
            name="postalCode"
            label="Código Postal"
            hasFeedback
            validateDebounce={1000}
            rules={[{ required: true, message: "" }]}
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <section className="flex gap-x-5 items-center flex-wrap">
                <Form.Item<FieldType>>
                    <button
                    onClick={() => navigate('/store')}
                    type="submit"
                    className="flex items-center gap-2 bg-blue-700 text-white font-medium py-1 px-2 rounded-lg text-base"
                    >
                        Seguir comprando
                    </button>
                </Form.Item>
                <div className="flex gap-x-5 items-center">
                    <Form.Item<FieldType>>
                        <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-2 bg-[#E2060F] text-white py-1 px-2 rounded-lg text-base hover:bg-[#001529] transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} /> Contacto
                        </button>
                    </Form.Item>
                    <Form.Item<FieldType>>
                        <button
                        className="flex items-center gap-2 bg-[#E2060F] text-white py-1 px-2 rounded-lg text-base hover:bg-[#001529] transition-all duration-300"
                        >
                            Facturación
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Form.Item>
                </div>
            </section>

        </Form>
    )
}
export default Shipping;