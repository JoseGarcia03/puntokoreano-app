import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormProps, Input } from "antd";
import React from "react";

interface Props {
    setStatus:React.Dispatch<React.SetStateAction<"wait" | "process" | "finish" | "error" | undefined>>
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

type FieldType = {
    name: string;
    lastName: string;
    email: string;
    phone: number;
}

const Contact = ({ setStatus, setCurrent }: Props) => {
    const onFinish: FormProps<FieldType>['onFinish'] = () => {
        setCurrent(1);
    }

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
        setStatus('error');
    };

    return (
        <Form
        name="Contact information"
        className="border rounded-lg p-4 mt-5 bg-white"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        >
            <h1 className="text-xl text-center font-bold">Información de contacto</h1>
            <p className="text-center">¿Ya tienes cuenta? <span className="text-[#E2060F] cursor-pointer">Iniciar Sesión</span></p>

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
            <Form.Item<FieldType>
            name="phone"
            label="Número celular (opcional)"
            hasFeedback
            validateDebounce={1000}
            rules={[{ min: 7, message: "El número celular debe tener al menos 7 caracteres" }]}
            >
                <Input type="number" placeholder="3126734589" />
            </Form.Item>
            <Form.Item<FieldType>>
                <button
                type="submit"
                className="flex items-center gap-2 bg-[#E2060F] text-white py-1 px-2 rounded-lg text-base hover:bg-[#001529] transition-all duration-300"
                >
                    Envío <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </Form.Item>
        </Form>
    )
};
export default Contact;