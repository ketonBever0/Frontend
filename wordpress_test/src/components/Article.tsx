import React from 'react'

function Article({ article }: any) {
    return (
        <div>

            <h2>{article.title.rendered}</h2>

            <p dangerouslySetInnerHTML={{ __html: article.content.rendered }} />


        </div>
    )
}

export default Article