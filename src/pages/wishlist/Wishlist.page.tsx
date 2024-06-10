import { faArrowLeft, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Table } from "antd";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
    const navigate = useNavigate();

    const wishlistValues = [
        {
            name: "Fluids & Chemicals",
            imageSrc: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product9.webp",
            price: 25000,
            stock: 10
        },
        {
            name: "Ssangyong Accesories",
            imageSrc: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product8.webp",
            price: 100000,
            stock: 1
        },
        {
            name: "Engine & Drivetrain",
            imageSrc: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product7.webp",
            price: 50000,
            stock: 3
        },
    ]

    const columns = [
        {
            title: "",
            render: () => (
                <button className="bg-[#E2060F] 2xl:ml-2 hover:bg-[#001529] shadow-xl transition-[background] duration-300 rounded-full px-[5px]">
                    <FontAwesomeIcon icon={faXmark} className="text-white " />
                </button>
            ),
            style: { padding: 0 }
        },
        {
            title: "Producto",
            dataIndex: "name",
            render: (name: string, element: Record<string, any>) => {
                return (
                    <figure className="flex gap-3 items-center">
                        <Image src={element.imageSrc} preview={false}  />
                        <figcaption className="text-ellipsis">{ name }</figcaption>
                    </figure>
                )
            }
        },
        {
            title: "Price",
            dataIndex: "price",
            render: (price: number) => (<p>$ { price.toLocaleString('es-CO')} COP</p>)
        },
        {
            title: "Stock",
            dataIndex: "stock",
            render: (stock: number) => <div>
                <FontAwesomeIcon icon={stock > 0 ? faCheck: faXmark} className="text-[#E2060F]" />
            </div>,
        },
        {
            title: ""
        }
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
                <h1 className="font-bold text-xl text-center mt-2 mb-5 xl:text-2xl">Lista de deseos</h1>
                <Table pagination={false} size="small" columns={columns} dataSource={wishlistValues}  />
            </section>
        </div>
    )
}
export default Wishlist;