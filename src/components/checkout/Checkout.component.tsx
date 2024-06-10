import { Checkbox, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom";
import Orders from "./Order.component";

const Checkout = () => {
    return (
        <div className="my-4 mx-5 pb-5 lg:mx-[50px] 2xl:w-[1236px] 2xl:mx-auto">
            <section className="mt-4 md:flex md:gap-4 md:relative">
                <Form className="mt-2" size="middle" layout="vertical" style={{ flex: 1 }}>
                    <section>
                        <h1 className="text-xl font-semibold text-center">Información de contacto</h1>
                        <p className="text-gray-400 text-center mt-2">
                            ¿Ya tienes cuenta? <span className="text-red-500">Iniciar sesión</span>
                        </p>
                        <Input type="email" className="mt-2" placeholder="Correo electronico" />
                    </section>
                    <h2 className="text-xl font-semibold my-4 lg:text-2xl">Datos de facturación</h2>
                    <div className="sm:flex sm:gap-5">
                        <Form.Item
                        label="Nombre"
                        rules={[{ required: true }]}
                        className="sm:w-1/2"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                        label="Apellido"
                        rules={[{ required: true }]}
                        className="sm:w-1/2"
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <Form.Item
                    label="Compañia (opcional)"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label="Dirección"
                    rules={[{ required: true }]}
                    >
                        <Input className="mb-3" placeholder="Dirección" />
                        <Input  placeholder="Apartamento, suite, etc"/>
                    </Form.Item>

                    <Form.Item
                    label="Ciudad"
                    rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label="Pais"
                    rules={[{ required: true }]}
                    >
                        <Select />
                    </Form.Item>

                    <Form.Item
                    label="Codigo postal"
                    rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Checkbox className="mb-5">¿Guardar informacion para la proxima vez?</Checkbox>

                    <Form.Item
                    label="Notas del pedido"
                    rules={[{ required: true }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <div className="sm:flex sm:gap-5 sm: items-center">
                        <button
                        type="submit"
                        className="bg-[#E2060F] text-white p-2 rounded-lg mx-auto block sm:mx-0"
                        >
                            Continuar con el envío
                        </button>
                        <section className="flex justify-center my-2">
                            <Link className="text-center text-[#E2060F] cursor-pointer" to={"/store"}>Seguir comprando</Link>
                        </section>
                    </div>

                </Form>
                <Orders />
            </section>
        </div>
    )
};
export default Checkout;