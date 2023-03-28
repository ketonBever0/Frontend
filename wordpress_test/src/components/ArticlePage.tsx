import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ArticlePage() {

    let { slug } = useParams();
    const [page, setPage] = useState<any | object | null>(null);

    useEffect(() => {
        fetch(`http://localhost/wordpress/wp-json/wp/v2/posts?slug=${slug}`, {
            headers: {
                Authorization: 'Basic bGFjaToxMjNRV0Vhc2Q='
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data && !data.message) {
                    setPage(data[0]);
                }
            })
            .catch(err => console.log(err));
    }, [])

    const [thumbnail, setThumbnail] = useState<any | Object | null>(null);

    useEffect(() => {

        if (page && page._links["wp:featuredmedia"]) {
            fetch(page._links["wp:featuredmedia"][0].href)
                .then(res => res.json())
                .then(data => {
                    if (!data.message) setThumbnail(data)
                })
                .catch(err => console.log(err));
        }

    }, [page])

    const [comments, setComments] = useState<any | Object | null>(null);

    useEffect(() => {

        if (page) {
            fetch(`http://localhost/wordpress/wp-json/wp/v2/comments?post=${page.id}`)
                .then(res => res.json())
                .then(data => {
                    if (!data.message) setComments(data)
                })
                .catch(err => console.log(err));
        }

    }, [page])

    return (
        <div>
            {thumbnail && thumbnail.guid.rendered && <img src={thumbnail.guid.rendered} />}

            <h1>{page?.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: page?.content.rendered }} />

            <h2>Hozzászólások</h2>
            <div>
                {comments && comments.map((comment: any | Object, index: any) => (
                    <div key={index} style={{ border: "2px dashed black", marginBottom: "2rem" }}>
                        <h4>{comment.author_name}</h4>
                        <p dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ArticlePage