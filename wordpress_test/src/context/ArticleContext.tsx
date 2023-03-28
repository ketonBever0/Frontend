import React, { createContext, useEffect, useState } from "react";


const ArticleContext = createContext<any | null>(null);

export const ArticleProvider = ({ children }: any) => {

    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState(null);


    useEffect(() => {

        // if (!articles) {
        setIsLoading(true);
        fetch('http://10.0.28.5/wordpress/wp-json/wp/v2/posts', {
            headers: {
                // 'Content-type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJMYWNpIiwiaWF0IjoxNjc5OTk1NDk3LCJleHAiOjE4Mzc2NzU0OTd9.8sopUixxUKgPTh8KRmQfL8yOGlnm-5Dzu6NvB4Ld2M4'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data && !data.message) {
                    setArticles(data);
                }
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
        // }

    }, [])




    return <ArticleContext.Provider value={{
        isLoading,
        articles
    }}>{children}</ArticleContext.Provider>

}

export default ArticleContext;