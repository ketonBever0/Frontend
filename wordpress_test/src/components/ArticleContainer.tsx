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
                !isLoading && articles?.map((article: Object, index: Number) => (

                    <Article article={article} key={index} />

                ))
            }

        </div>
    )
}

export default ArticleContainer