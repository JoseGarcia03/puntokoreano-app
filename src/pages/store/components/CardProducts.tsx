import { useNavigate } from "react-router-dom";
import CountReview from "./CountReview.component";

const CardProducts = () => {
    const navigate = useNavigate();

    return (
        <div className="transition duration-500 w-80 border rounded-lg relative cursor-pointer hover:border-[#E2060F] sm:w-64 xl:w-80">
            <div onClick={() => navigate('/store/product/1')}>
                {/* size of image is w-320px and h-320px smartphones */}
                <div className="bg-[#E2060F] absolute py-3.5 px-3 rounded-full text-white right-4 top-4"> 20% </div>
                <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6c096b2dda96843a74d6522c7278c799.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" alt="" className="rounded-lg w-full h-80 sm:w-64 sm:h-auto xl:w-80" />
            </div>
            <div className="px-4" onClick={() => navigate('/store/product/1')}>
                <CountReview />
                <h3 className="font-bold text-xl">Filtro de aire de alto flujo</h3>
                <div className="flex gap-4 mb-4">
                    <h4 className="font-bold text-base text-[#E2060F]">$ 24.000 COP</h4>
                    <h4 className="text-base text-[#898686]">$ 30.000 COP</h4>
                </div>
            </div>
            <div className="px-4 mb-4">
                <button
                className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 text-white px-4 py-2 w-full rounded-lg">
                    Añadir al carrito
                </button>
            </div>
        </div>
    )
}
export default CardProducts;