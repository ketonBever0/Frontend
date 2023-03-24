import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import placeholderImage from '../assets/placeholder_img.jpg'

function Article({ article }: any) {

    const [thumbnail, setThumbnail] = useState<any | null>(null);
    // const [isThereThmubnail, setIsThereThumbnail] = useState<boolean>(false);

    // article._links["wp:featuredmedia"] && console.log(article._links["wp:featuredmedia"])

    useEffect(() => {

        if (article._links["wp:featuredmedia"]) {
            fetch(article._links["wp:featuredmedia"][0].href)
                .then(res => res.json())
                .then(data => {
                    if (!data.message) setThumbnail(data.guid.rendered);
                })
                .catch(err => {
                    console.log(err);
                    setThumbnail('../assets/placeholder_img');
                });
        }

    }, [article])

    return (
        <div>
            {
                article &&
                <div>

                    <h2>{article.title.rendered}</h2>
                    <strong>{article.title.author}</strong><br />
                    <div dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />

                    <img src={thumbnail || placeholderImage} />

                    <Link to={`/article/${article.slug}`}>Tovább</Link>


                </div>
            }
        </div>
    )
}

export default Article