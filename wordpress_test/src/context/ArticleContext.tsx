import React, { createContext, useEffect, useState } from "react";


const ArticleContext = createContext<any | null>(null);

export const ArticleProvider = ({ children }: any) => {

    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState(null);


    useEffect(() => {

        // if (!articles) {
        setIsLoading(true);
        fetch('http://localhost/wordpress/wp-json/wp/v2/pages')
            .then(res => res.json())
            .then(data => {
                if (data && !data.message) {
                    setArticles(data);
                }
            })
            .catch(err => console.log(err));
        setIsLoading(false);
        // }

    }, [])


    return <ArticleContext.Provider value={{
        isLoading,
        articles
    }}>{children}</ArticleContext.Provider>

}

export default ArticleContext;