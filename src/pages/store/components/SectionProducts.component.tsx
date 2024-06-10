import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardProducts from "./CardProducts";

const SectionProducts = () => {
    return (
        <div className="mx-5 mb-10 lg:mx-12">
            <div className="flex items-center gap-2 mt-2 py-2 border-b border-b-[#e5e5e5] mb-5">
                <FontAwesomeIcon icon={faCircle} className="text-[#E2060F] text-sm p-1 border rounded-full border-[#E2060F]" />
                <h2 className="text-xl uppercase lg:text-2xl"><strong>Productos</strong> populares</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-8 lg:justify-evenly">
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
            </div>
        </div>
    )
}
export default SectionProducts;