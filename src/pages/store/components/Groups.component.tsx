import axios from "axios";
import Slider from 'react-slick';
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useResizeObserver from "use-resize-observer";
import SelectDropdown from "./Select.component";


type group = {
    name: string;
    description: string;
    image: string;
    subgroups: subgroups[]
}

type subgroups = {
    name: string;
}

const GroupComponent = () => {
    const [ slidesToShow, setSlidesToSHow ] = useState(1);
    const [ hoveredCategory, setHoveredCategory ] = useState<null | group >(null);

    const { ref, width = 190 } = useResizeObserver();

    const { data } = useQuery({
        queryKey: ['groups'],
        queryFn: () => {
            return axios.get(`${import.meta.env.VITE_API_REST_URL}/api/groups`)
            .then((resp) => {
                return resp.data
            });
        }
    });

    useEffect(() => {
        const maxSlides = Math.floor( width / 180 );
        setSlidesToSHow( maxSlides );
    }, [ width ])

    return (
        <div className="w-full z-20 bg-header px-2">
            <div className="max-w-[1320px] mx-auto overflow-hidden lg:px-10">
                <div ref={ref} className="flex h-fit px-2 justify-center text-white mx-5">
                    <Slider
                    className="w-full"
                    infinite
                    dots={false}
                    slidesToShow={slidesToShow}
                    slidesToScroll={2}
                    variableWidth
                    >
                    {
                        data?.groups?.map((group: group, idx: number ) => {
                            return (
                                <div
                                key={ `${idx}-${group.name}` }
                                onMouseEnter={() => setHoveredCategory(group)}
                                onMouseLeave={() => setHoveredCategory(null)}
                                className="whitespace-nowrap text-center px-4 cursor-pointer hover:text-secondary transition-all duration-300"
                                >
                                    { group.name }
                                </div>
                            )
                        })
                    }
                    </Slider>
                </div>
                <SelectDropdown hoveredCategory={hoveredCategory} setHoveredCategory={setHoveredCategory} />
            </div>
        </div>
    )
};
export default GroupComponent;