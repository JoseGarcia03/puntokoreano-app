import { Drawer, Image } from "antd";
import { useMediaQuery } from "react-responsive";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WishlistModal = ({ open, setOpen}: Props) => {
    const md = useMediaQuery({ query: '(min-width: 768px)' });
    
    const handleClose = () => setOpen(false);

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
        {
            name: "Engine",
            imageSrc: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product6.webp",
            price: 50300,
            stock: 0
        },
    ]

    return (
        <Drawer destroyOnClose width={md ? 400 : 320 } title="Lista de deseos" open={open} onClose={handleClose}>
            {
                wishlistValues.map((value, index) => {
                    return (
                        <section key={`${value.name}-${index}`} className="flex gap-4 border-b mb-4">
                            <figure className="w-24 h-28">
                                <Image
                                style={{ objectFit: "contain", width: 96, height: 112 }}
                                src={ value.imageSrc }
                                alt={ value.name }
                                preview={false}
                                />
                            </figure>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold">
                                    { value.name }
                                </h3>
                                <p>$ { value.price.toLocaleString('es-CO') } COP</p>
                                <button
                                className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 text-white px-3 py-1.5 w-full rounded-lg">
                                    Añadir al carrito
                                </button>
                            </div>
                        </section>
                    )
                })
            }
        </Drawer>
    )
};
export default WishlistModal;