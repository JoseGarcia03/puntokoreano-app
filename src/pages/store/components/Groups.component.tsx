import axios from "axios";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useResizeObserver from "use-resize-observer";
import SelectDropdown from "./Select.component";

// import groupsData from "../../../assets/puntokoreano_db.groups_collection.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type group = {
  name: string;
  description: string;
  image: string;
  subgroups: subgroups[];
};

type subgroups = {
  name: string;
};

const GroupComponent = () => {
  const slider = useRef<Slider | null>(null);

  const [slidesToShow, setSlidesToSHow] = useState(1);
  const [hoveredCategory, setHoveredCategory] = useState<null | group>(null);

  const { ref, width = 190 } = useResizeObserver();

  const { data } = useQuery({
    queryKey: ["groups"],
    queryFn: () => {
      return axios
        .get(`${import.meta.env.VITE_API_REST_URL}/groups/get-groups`)
        .then((resp) => {
          return resp.data;
        });
    },
  });

  const NextArrow = () => {
    return (
      <div className="absolute -right-6 top-1/2 size-5 -translate-y-1/2 ">
        <button
          className="bg-yellow-500 hover:bg-[#ddd] rounded-full size-5 flex items-center justify-center"
          onClick={() => slider?.current?.slickNext()}
        >
          <FontAwesomeIcon icon={faArrowRight} size="xs" />
        </button>
      </div>
    );
  };

  const PrevArrow = () => {
    return (
      <div className="absolute -left-6 top-1/2 size-5 -translate-y-1/2 ">
        <button
          className="bg-yellow-500 hover:bg-[#e5e7eb] rounded-full size-5 flex items-center justify-center"
          onClick={() => slider?.current?.slickPrev()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="xs" />
        </button>
      </div>
    );
  };

  useEffect(() => {
    const maxSlides = Math.floor(width / 180);
    setSlidesToSHow(maxSlides);
  }, [width]);

  return (
    <div className="w-full z-20 bg-white px-2">
      <div className="max-w-[1320px] mx-auto overflow-hidden lg:px-10">
        <div
          ref={ref}
          className="flex h-fit px-2 justify-center text-secondary_1 mx-5"
        >
          <Slider
            ref={slider}
            className="w-full"
            dots={false}
            infinite={true}
            slidesToShow={slidesToShow}
            slidesToScroll={2}
            variableWidth
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {data?.data.map((group: group, idx: number) => {
              return (
                <div
                  key={`${idx}-${group.name}`}
                  onMouseEnter={() => setHoveredCategory(group)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`whitespace-nowrap text-center px-4 cursor-pointer ${
                    hoveredCategory?.name === group.name &&
                    "text-white bg-header"
                  } transition-all duration-300`}
                >
                  {group.name}
                </div>
              );
            })}
          </Slider>
        </div>
        <SelectDropdown
          hoveredCategory={hoveredCategory}
          setHoveredCategory={setHoveredCategory}
        />
      </div>
    </div>
  );
};
export default GroupComponent;
