import { Badge, Image, Input } from "antd";
import { useEffect, useState } from "react";

const Orders = () => {
    const [ subTotal, setSubTotal ] = useState<number>(0);
    const [ total, setTotal ] = useState<number>(0);

    const getTotalAndSubTotal = () => {
        const total = valuesCart.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);

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
    ]

    return (
        <section className="bg-[#FFFFFF] rounded-lg mt-4 px-4 border shadow-xl pb-5 md:h-fit md:w-fit md:sticky lg:w-2/5 lg:mt-[75px]">
            <h3 className="text-xl text-center py-4 font-bold">Su orden</h3>
            {
                valuesCart.map((cart, idx) => {
                    return (
                        <div key={`${cart.name}-${idx}`} className="flex justify-center gap-4 border-b mt-5 sm:gap-10 sm:justify-start">
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
            <div className="pt-4 text-base border-b">
                <div className="flex justify-between pb-2">
                    <p className="text-gray-400">Subtotal</p>
                    <p>$ { subTotal.toLocaleString('es-CO') } COP</p>
                </div>
            </div>

            <div className="pt-4 text-base flex justify-between">
                <p>Total</p>
                <p>$ { total.toLocaleString('es-CO') } COP</p>
            </div>
        </section>
    )
};
export default Orders;