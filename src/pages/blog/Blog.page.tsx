import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();

    const brands = [
        {
            name: "musso",
            image: "https://www.puntokoreano.com/images/musso.svg"
        },
        {
            name: "rexton",
            image: "https://www.puntokoreano.com/images/rexton.png"
        },
        {
            name: "rodius",
            image: "https://www.puntokoreano.com/images/rodius.png"
        },
        {
            name: "tivoli",
            image: "https://www.puntokoreano.com/images/tivoli.png"
        },
        {
            name: "korando",
            image: "https://www.puntokoreano.com/images/korando.png"
        },
        {
            name: "kyron",
            image: "https://www.puntokoreano.com/images/kyron.png"
        },
        {
            name: "actyon",
            image: "https://www.puntokoreano.com/images/actyon.jpg"
        },
        {
            name: "stavic",
            image: "https://www.puntokoreano.com/images/stavic.jpg"
        }
    ];

    return (
        <div className="mx-5 lg:mx-[50px]">
            <section className="my-5 md:flex md:justify-between md:items-center">
                <div className="md:flex md:flex-col md:items-start md:w-1/2">
                    <h1 className="text-2xl underline decoration-[#CD42E9] text-center uppercase xl:text-4xl">
                        Blog Interactivo
                    </h1>
                    <p className="text-base text-center mt-2 md:text-start md:mt-0">
                        Descubre consejos para prolongar la vida util de las piezas de tu vehiculo y deja tus inquetudes.
                    </p>
                </div>
                <div className="flex items-center justify-around md:gap-3">
                    <img src="https://puntokoreano.com/images/KG_Mobility.png" alt="" width={160} />
                    <Divider type="vertical" className={`border-[#001529] border-2 h-16 -ml-4`} />
                    <img src="https://puntokoreano.com/images/SSangYong_blue.png" alt="" width={100} />
                </div>
            </section>
            <section className="my-5 md:flex md:flex-wrap md:justify-between xl:justify-around">
                {
                    brands.map((brand, idx) => {
                        return (
                            <div
                            key={`${idx}-${brand.name}`}
                            className="border-4 border-yellow-400 bg-white flex justify-center cursor-pointer my-5 min-w-80 lg:min-w-[450px] 2xl:min-w-[45%]"
                            onClick={() => navigate(`/blog/${brand.name}/vehicles`)}
                            >
                                <img src={brand.image} alt="" className="w-52 h-40 object-contain" />
                            </div>
                        )
                    })
                }
            </section>
        </div>
    );
}
export default Blog;