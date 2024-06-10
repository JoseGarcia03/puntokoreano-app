import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    userRating?: boolean;
    raiting?: number;
}
const CountReview = ({ userRating = false }: Props) => {

    return (
        <div className="flex gap-1 items-baseline mt-2">
            <FontAwesomeIcon icon={faStarSolid} className="text-[#E2060F]" />
            <FontAwesomeIcon icon={faStarSolid} className="text-[#E2060F]" />
            <FontAwesomeIcon icon={faStarSolid} className="text-[#E2060F]" />
            <FontAwesomeIcon icon={faStar} className="text-[#E2060F]" />
            <FontAwesomeIcon icon={faStar} className="text-[#E2060F]" />

            {!userRating && <p>(150) Calificaciones</p>}
        </div>
    )
};
export default CountReview;