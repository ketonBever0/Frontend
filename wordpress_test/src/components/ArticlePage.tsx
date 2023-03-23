import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ArticlePage() {

    let { slug } = useParams();
    const [page, setPage] = useState<any | object | null>(null);

    useEffect(() => {
        fetch(`http://localhost/wordpress/wp-json/wp/v2/posts?slug=${slug}`)
            .then(res => res.json())
            .then(data => {
                if (data && !data.message) {
                    setPage(data[0]);
                }
            })
            .catch(err => console.log(err));
    }, [])

    console.log(page)

    return (
        <div>
            <h1>{page?.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: page?.content.rendered }} />
        </div>
    )
}

export default ArticlePage