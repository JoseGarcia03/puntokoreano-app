import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormProps, Input, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    setStatus:React.Dispatch<React.SetStateAction<"wait" | "process" | "finish" | "error" | undefined>>
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

type FieldType = {
    person: string;
    nit?: string;
    registerdName?: string;
    email?: string;
    name?: string;
    lastName?: string
}

const Billing = ({ setStatus, setCurrent }: Props) => {
    const navigate = useNavigate();
    const { Option } = Select;
    const [ person, setPerson ] = useState<string|undefined>();

    const handleChangePerson = (value: string) => {
        setPerson(value)
    }

    const onFinish: FormProps<FieldType>['onFinish'] = () => {
        // setCurrent(3);
        navigate('/store/finish-order')
    }

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
        setStatus('error');
    };

    const handleBack = () => {
        setCurrent(1);
    }

    return (
        <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="border rounded-lg p-4 mt-5 bg-white"
        >
            <h1 className="text-xl text-center font-bold">Facturación</h1>

            <Form.Item<FieldType>
            name="person"
            label="Tipo de persona"
            rules={[{ required: true, message: "Introduzca Tipo de persona" }]}
            >
                <Select onChange={handleChangePerson}>
                    <Option value="natural">Persona Natural</Option>
                    <Option value="juridica">Persona Jurídica</Option>
                </Select>
            </Form.Item>
            {
                person == "juridica" && (
                    <>
                    <Form.Item<FieldType>
                    name="registerdName"
                    label="Razón Social"
                    hasFeedback
                    validateDebounce={1000}
                    rules={[{ required: true, min: 2, message: "La Razón Social debe tener al menos 2 caracteres" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                    name="nit"
                    label="Número de Identificación Tributaria (NIT)"
                    hasFeedback
                    validateDebounce={1000}
                    rules={[{ required: true, message: "Introduzca el Número de Identificación Tributaria (NIT)" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                    name="email"
                    label="Correo electrónico"
                    hasFeedback
                    validateDebounce={1000}
                    rules={[{ required: true, message: "Introduzca un correo electrónico válido" }]}
                    >
                        <Input />
                    </Form.Item>
                    </>
                )
            }
            {
                person == "natural" && (
                    <>
                        <Form.Item<FieldType>
                        label="Nombre"
                        name="name"
                        hasFeedback
                        validateDebounce={1000}
                        rules={[{ required: true, min: 2, message: "El nombre debe tener al menos 2 caracteres" }]}
                        >
                            <Input placeholder="Joe" />
                        </Form.Item>
                        <Form.Item<FieldType>
                        label="Apellido"
                        name="lastName"
                        hasFeedback
                        validateDebounce={1000}
                        rules={[{ required: true, min: 2, message: "El apellido debe tener al menos 2 caracteres" }]}
                        >
                            <Input placeholder="Doe" />
                        </Form.Item>
                        <Form.Item<FieldType>
                            name="email"
                            label="Correo Electrónico"
                            hasFeedback
                            validateDebounce={1000}
                            rules={[{ required: true, type: "email", message: "Introduzca un correo electrónico válido" }]}
                        >
                            <Input placeholder="joedoe@gmail.com" />
                        </Form.Item>
                    </>
                )
            }
            <div className="flex gap-x-5 items-center flex-wrap">
                <Form.Item<FieldType>>
                    <button
                    onClick={() => navigate('/store')}
                    type="submit"
                    className="flex items-center gap-2 text-[#5037f4] font-medium py-1 px-2 rounded-lg text-base"
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
                            <FontAwesomeIcon icon={faArrowLeft} /> Envío
                        </button>
                    </Form.Item>

                    <Form.Item<FieldType>>
                        <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#E2060F] text-white py-1 px-2 rounded-lg text-base hover:bg-[#001529] transition-all duration-300"
                        >
                            Pago <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Form.Item>
                </div>
            </div>
        </Form>
    );
}
export default Billing;