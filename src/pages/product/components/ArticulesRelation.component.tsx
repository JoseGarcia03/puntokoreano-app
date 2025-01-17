import CardArticle from "@/pages/blog/components/CardArticle.component";
import { useNavigate } from "react-router-dom";

const ArticuleRelation = () => {
    const navigate = useNavigate();

    const articles = [
        {
            "title": "Dolor sit amet adipisicing elit.",
            "image": "https://risingtheme.com/html/demo-partsix/partsix/assets/img/blog/blog1.webp",
            "author": "Joe Doe",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti cum amet saepe nulla quas veritatis.",
            "date": "20 Octubre"
        },
        {
            "title": "Dolor sit amet adipisicing elit.",
            "image": "https://risingtheme.com/html/demo-partsix/partsix/assets/img/blog/blog2.webp",
            "author": "Joe Doe",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti cum amet saepe nulla quas veritatis.",
            "date": "20 Octubre"
        },
        {
            "title": "Dolor sit amet adipisicing elit.",
            "image": "https://risingtheme.com/html/demo-partsix/partsix/assets/img/blog/blog3.webp",
            "author": "Joe Doe",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti cum amet saepe nulla quas veritatis.",
            "date": "20 Octubre"
        },
        {
            "title": "Dolor sit amet adipisicing elit.",
            "image": "https://risingtheme.com/html/demo-partsix/partsix/assets/img/blog/blog4.webp",
            "author": "Joe Doe",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti cum amet saepe nulla quas veritatis.",
            "date": "20 Octubre"
        },
        {
            "title": "Dolor sit amet adipisicing elit.",
            "image": "https://risingtheme.com/html/demo-partsix/partsix/assets/img/blog/blog5.webp",
            "author": "Joe Doe",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti cum amet saepe nulla quas veritatis.",
            "date": "20 Octubre"
        }
    ];
    return (
        <div className="gap-2 mb-4 bg-white p-4 rounded-xl xl:px-10 xl:py-6" >
            <div className="flex flex-wrap justify-around">
                {
                    articles.map( (article, idx) =>
                        <div key={`${idx}-${article.title}`}>
                            <CardArticle article={article} />
                        </div>
                    )
                }
            </div>

            <p
            onClick={() => navigate('/blog')}
            className="text-center text-xl font-semibold text-blue-600 cursor-pointer font-glegoo"
            >
                Leer mas
            </p>
        </div>
    )
}
export default ArticuleRelation;