import React, { useContext } from 'react'
import ArticleContext from '../context/ArticleContext'
import Article from './Article';

function ArticleContainer() {

    const {
        isLoading,
        articles
    } = useContext(ArticleContext);

    return (
        <div>
            {
                !isLoading && articles?.map((article: Object, index: any) => (
                    <div key={index} style={{ border: "2px solid black" }}>
                        <Article article={article} />
                    </div>
                ))
            }

        </div>
    )
}

export default ArticleContainer