import { faArrowLeft, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const [ subTotal, setSubTotal ] = useState<number>(0);
    const [ total, setTotal ] = useState<number>(0);
    const [ count, setCount ] = useState<string>("1");

    const getTotalAndSubTotal = () => {
        const total = valuesCart.reduce(( sum, item ) => sum + item.price, 0);

        setSubTotal(total);
        setTotal(total);
    }

    const handleClicPlus = () => {
        setCount(`${Number(count) + 1}`);
    }

    const handleClicRest = () => {
        Number(count) > 1 && setCount(`${Number(count) - 1}`)
    }

    useEffect(() => {
        getTotalAndSubTotal()
    }, [])

    const columns = [
        {
            title: "Producto",
            dataIndex: "name",
            render: (name: string, element: Record<string, any>) => {
                return (
                    <figure className="flex gap-3 items-center">
                        <Image src={element.image} preview={false}  />
                        <figcaption className="text-ellipsis">{ name }</figcaption>
                    </figure>
                )
            }
        },
        {
            title: "Precio",
            dataIndex: "price",
            render: (price: number) => (<p>$ { price.toLocaleString('es-CO')} COP</p>),
        },
        {
            title: "",
            dataIndex: "quantity",
            render: (quantity: number) => <Space className="gap-0 relative flex">
                <button onClick={handleClicPlus} className="w-7 h-7 bg-gray-300 rounded-l-full font-bold text-xl flex justify-center items-center">+</button>
                <input
                    value={quantity}
                    type="number"
                    className="outline-none h-[25px] px-2 w-2 text-lg font-bold text-center box-content border-y no-spinner"
                />
                <button onClick={handleClicRest} className="w-7 h-7 bg-gray-300 rounded-r-full font-bold text-xl flex justify-center items-center">-</button>
            </Space>,
        },
        {
            title: "",
            render: () => (
                <button className="bg-[#E2060F] 2xl:ml-2 hover:bg-[#001529] shadow-xl transition-[background] duration-300 rounded-full px-[5px]">
                    <FontAwesomeIcon icon={faXmark} className="text-white " />
                </button>
            ),
            style: { padding: 0 }
        },
    ]

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
        <div className="px-5 pt-4 lg:px-[50px] xl:min-h-[80vh]">
            <section
            className="flex items-center gap-3 w-fit cursor-pointer"
            onClick={() => navigate('/store')}
            >
                <FontAwesomeIcon className="text-lg" icon={faArrowLeft} />
                <p className="text-lg font-semibold">Tienda</p>
            </section>

            <section className="mb-10 max-w-6xl mx-auto">
                <h1 className="font-bold text-xl text-center mt-2 mb-5 xl:text-2xl">Carrito de compras</h1>
                <Table
                pagination={false}
                size="small"
                columns={columns}
                dataSource={valuesCart}
                summary={() => (
                    <Table.Summary fixed={'bottom'}>
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0} colSpan={24}>
                                <div className="flex justify-between">
                                    <p className="font-medium text-xl xl:text-2xl">SubTotal:</p>
                                    <p className="font-medium text-base">$ { subTotal.toLocaleString('es-CO') } COP</p>
                                </div>
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0} colSpan={24}>
                                <div className="flex justify-between">
                                    <p className="font-medium text-xl xl:text-2xl">Total:</p>
                                    <p className="font-medium text-base">$ { total.toLocaleString('es-CO') } COP</p>
                                </div>
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                    </Table.Summary>
                )}
                />
                <div className="flex items-center justify-between gap-14 px-2">
                    <Link className="text-base font-bold w-60 block" to={'/store'}>Seguir comprando</Link>
                    <button
                    className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 text-white w-64 py-2 rounded-full font-semibold text-base mt-2"
                    onClick={() => {
                        navigate('/store/checkout');
                    }}
                    >
                        Ir a pagar
                    </button>
                </div>
            </section>
        </div>
    )
}
export default Cart;