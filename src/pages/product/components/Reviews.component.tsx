import CountReview from "../../store/components/CountReview.component";
import ReviewUser from "./Review.component";
import WriteRaiting from "./WriteReview.component";

const ReviewsProduct = () => {
    const reviews = [
        {
            srcImage: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/other/comment-thumb1.webp",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed modi assumenda blanditiis ipsa, excepturi minima dolore eius aspernatur accusamus ut illo iste obcaecati iusto. Incidunt expedita atque quibusdam et doloribus!",
            active: true,
            date: "12 Febrero 2023",
            rating: 3,
            name: "Jakes on"
        },
        {
            srcImage: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/other/comment-thumb2.webp",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed modi assumenda blanditiis ipsa, excepturi minima dolore eius aspernatur accusamus ut illo iste obcaecati iusto. Incidunt expedita atque quibusdam et doloribus!",
            active: true,
            date: "12 Febrero 2023",
            rating: 3,
            name: "Richard Johnson"
        },
        {
            srcImage: "https://risingtheme.com/html/demo-partsix/partsix/assets/img/other/comment-thumb3.webp",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed modi assumenda blanditiis ipsa, excepturi minima dolore eius aspernatur accusamus ut illo iste obcaecati iusto. Incidunt expedita atque quibusdam et doloribus!",
            active: true,
            date: "12 Febrero 2023",
            rating: 3,
            name: "Laura Smith"
        },
    ];

    return (
        <div className="flex flex-col gap-2 mb-4 bg-white p-4 rounded-xl xl:px-10 xl:py-6" >
            <section className="w-full flex flex-col items-center gap-2 border-b border-b-gray-300 pb-4 sm:flex-row sm:justify-between">
                <div>
                    <h2 className="text-lg font-bold text-center sm:text-start xl:text-2xl">Comentarios de clientes</h2>
                    <CountReview />
                </div>
                <button className="bg-[#E2060F] hover:bg-[#001529] transition-[background-color] duration-300 py-2 px-4 rounded-full text-white ">Escribir una calificación</button>
            </section>

            <section>
                {
                    reviews.map((review) => <ReviewUser review={review} />)
                }
            </section>

            <section>
                <WriteRaiting />
            </section>

        </div>
    )
}
export default ReviewsProduct;