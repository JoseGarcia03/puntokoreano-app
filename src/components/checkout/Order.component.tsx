import { Badge, Image, Input } from "antd";
import { useEffect, useState } from "react";

const Orders = () => {
    const [ subTotal, setSubTotal ] = useState<number>(0);
    const [ total, setTotal ] = useState<number>(0);

    const getTotalAndSubTotal = () => {
        const total = valuesCart.reduce(( sum, item ) => sum + item.price, 0);

        setSubTotal(total);
        setTotal(total);
    }

    useEffect(() => {
        getTotalAndSubTotal()
    }, [])

    const valuesCart = [
        {
            name: "Car & Motorbike Care.",
            image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product1.webp",
            quantity: 2,
            price: 25000
        },
        {
            name: "Enginer and Drivetrain",
            image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product2.webp",
            quantity: 5,
            price: 65000
        },
        {
            name: "Enginer and Drivetrain",
            image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product3.webp",
            quantity: 1,
            price: 100000
        },
        {
            name: "Enginer and Drivetrain",
            image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product4.webp",
            quantity: 3,
            price: 10000
        },
        // {
        //     name: "Enginer and Drivetrain",
        //     image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product5.webp",
        //     quantity: 1,
        //     price: 300000
        // },
        // {
        //     name: "Enginer and Drivetrain",
        //     image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product6.webp",
        //     quantity: 1,
        //     price: 55000
        // },
        // {
        //     name: "Enginer and Drivetrain",
        //     image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product7.webp",
        //     quantity: 4,
        //     price: 25250
        // },
        // {
        //     name: "Enginer and Drivetrain",
        //     image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product8.webp",
        //     quantity: 6,
        //     price: 89000
        // },

    ]

    return (
        <section className="bg-[#FFFFFF] rounded-lg mt-4 px-4 border shadow-xl pb-8 md:h-fit md:w-fit md:sticky">
            <h3 className="text-xl text-center py-4 font-bold">Su orden</h3>
            {
                valuesCart.map((cart) => {
                    return (
                        <div className="flex justify-center gap-4 border-b mt-5 sm:gap-10 sm:justify-start">
                            <figure>
                                <Badge count={cart.quantity}>
                                    <Image preview={false} src={cart.image} />
                                </Badge>
                            </figure>
                            <div>
                                <h2 className="font-semibold text-lg">{ cart.name }</h2>
                                <p>$ { cart.price.toLocaleString('es-CO') } COP</p>
                            </div>
                        </div>
                    )
                })
            }

            <div className="flex gap-4 mt-5 border-b pb-4 sm:w-1/2 lg:w-full">
                <Input placeholder="Cupón" type="text" />
                <button className="bg-[#E2060F] text-white px-4 rounded-lg text-base">
                    Aplicar
                </button>
            </div>

            <div className="py-4 text-base border-b">
                <div className="flex justify-between pb-2">
                    <p className="text-gray-400">Subtotal</p>
                    <p>$ { subTotal.toLocaleString('es-CO') } COP</p>
                </div>
                <div className="flex justify-between text-gray-400">
                    <p>Envio</p>
                    <p>Se calcula en el proximo paso</p>
                </div>
            </div>

            <div className="py-4 text-base flex justify-between">
                <p>Total</p>
                <p>$ { total.toLocaleString('es-CO') } COP</p>
            </div>

            <div>
                <h3 className="text-xl font-bold">Pago</h3>
                <div className="flex text-base gap-2 mt-4 overflow-x-auto">
                    <button className="text-nowrap border border-[#333] px-2 rounded-full hover:bg-[#333] hover:text-white transition-all duration-300">
                        Tarjeta de crédito
                    </button>
                    <button className="text-nowrap  border border-[#333] px-2 rounded-full hover:bg-[#333] hover:text-white transition-all duration-300">
                        Transferencia Bancaria
                    </button>
                    <button className="text-nowrap  border border-[#333] px-2 rounded-full hover:bg-[#333] hover:text-white transition-all duration-300">
                        Paypal
                    </button>
                </div>
            </div>

            <button className="bg-[#E2060F] text-white block w-full py-1 text-base mt-6 rounded-full hover:bg-[#333] hover:text-white ">
                Comprar ahora
            </button>
        </section>
    )
};
export default Orders;