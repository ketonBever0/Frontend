import React from 'react'
import { Link } from 'react-router-dom'

function Article({ article }: any) {
    return (
        <div>

            <h2>{article.title.rendered}</h2>
            <strong>{article.title.author}</strong><br />
            <div dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />

            <Link to={`/article/${article.slug}`}>Tovább</Link>


        </div>
    )
}

export default Article