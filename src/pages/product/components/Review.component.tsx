import { Avatar } from "antd";
import CountReview from "../../store/components/CountReview.component";

interface Props {
    review: {
        srcImage: string;
        comment: string;
        active: boolean;
        date: string;
        rating: number;
        name: string;
    }
}

const ReviewUser = ({ review }: Props) => {
    return (
        <section className="border-b border-b-gray-300 pb-4 mt-4">
            <div className="flex items-end justify-between mb-4">
                <figure>
                    <Avatar size={84} src={review.srcImage} />
                    <h4 className="text-lg font-semibold">{ review.name }</h4>
                    <CountReview userRating raiting={review.rating} />
                </figure>
                <p className="p-2 border border-gray-300 w-fit rounded-lg text-gray-400">{ review.date }</p>
            </div>
            <p className="text-base">{ review.comment }</p>
        </section>
    )
}
export default ReviewUser;