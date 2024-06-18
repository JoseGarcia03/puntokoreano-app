import { Drawer, Image, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal = ({ open, setOpen }: Props) => {
    const md = useMediaQuery({ query: '(min-width: 768px)' })
    const navigate = useNavigate();
    const [ count, setCount ] = useState<string>("1");
    const [ subTotal, setSubTotal ] = useState<number>(0);
    const [ total, setTotal ] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClose = () => setOpen(false);

    const handleClicPlus = () => {
        setCount(`${Number(count) + 1}`);
    }

    const handleClicRest = () => {
        Number(count) > 1 && setCount(`${Number(count) - 1}`)
    }

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
        {
            name: "Enginer and Drivetrain",
            image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product5.webp",
            quantity: 1,
            price: 300000
        },
        {
            name: "Enginer and Drivetrain",
            image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product6.webp",
            quantity: 1,
            price: 55000
        },
        {
            name: "Enginer and Drivetrain",
            image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product7.webp",
            quantity: 4,
            price: 25250
        },
        {
            name: "Enginer and Drivetrain",
            image: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product8.webp",
            quantity: 6,
            price: 89000
        },

    ]

    return (
        <Drawer destroyOnClose width={md ? 400 : 320 } title="Carrito de compras" open={open} onClose={handleClose}>
            {
                valuesCart.map((value) => {
                    return (
                        <section key={value.name} className="flex gap-4 border-b mb-4">
                            <figure className="w-24 h-28">
                                <Image
                                style={{ objectFit: "contain", width: 96, height: 112 }}
                                src={ value.image }
                                alt={ value.name }
                                preview={false}
                                />
                            </figure>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">
                                    { value.name }
                                </h3>
                                <p>$ { value.price.toLocaleString('es-CO') } COP</p>
                                <Space className="gap-0 relative flex">
                                    <button onClick={handleClicPlus} className="w-7 h-7 bg-gray-300 rounded-l-full font-bold text-xl flex justify-center items-center">+</button>
                                    <input
                                        ref={inputRef}
                                        value={value.quantity}
                                        type="number"
                                        className="outline-none h-[25px] px-2 w-2 text-lg font-bold text-center box-content border-y no-spinner"
                                    />
                                    <button onClick={handleClicRest} className="w-7 h-7 bg-gray-300 rounded-r-full font-bold text-xl flex justify-center items-center">-</button>
                                    <button className="underline text-base absolute -right-5 bottom-0 cursor-pointer">Eliminar</button>
                                </Space>
                            </div>
                        </section>
                    )
                })
            }
            <section>
                <div className="flex justify-between mb-4">
                    <p className="font-medium text-base">SubTotal:</p>
                    <p className="font-medium text-base">$ { subTotal.toLocaleString('es-CO') } COP</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-medium text-base">Total:</p>
                    <p className="font-medium text-base">$ { total.toLocaleString('es-CO') } COP</p>
                </div>
            </section>

            <section className="flex gap-4 mt-4">
                <button
                onClick={() => {
                    setOpen(false);
                    navigate('/store/cart')
                }}
                className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 text-white w-full py-2 rounded-full font-semibold text-base mt-2"
                >
                    Ver Carrito
                </button>
                <button
                className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 text-white w-full py-2 rounded-full font-semibold text-base mt-2"
                onClick={() => {
                    setOpen(false);
                    navigate('store/checkout');
                }}
                >
                    Ir a pagar
                </button>
            </section>
        </Drawer>
    )
}
export default CartModal;