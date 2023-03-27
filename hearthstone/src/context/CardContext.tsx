import { createContext, useState } from "react";


const CardContext = createContext<any | null>(null);

export const CardProvider = ({ children }: any) => {


    //  !!!!!!  API KEY !!!!!!

    const api_key: String = 'd33319bbe6msh21c902c89c92a55p1b82b7jsn702e1ba7bd69';

    //  !!!!!!  API KEY !!!!!!



    const headers: Object = {
        'X-RapidAPI-Key': api_key,
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }

    const [isLoading, setIsloading] = useState<boolean>(false);


    const [info, setInfo] = useState<Object>({
        patch: String,
        classes: Array,
        sets: Array,
        standard: Array,
        wild: Array,
        types: Array,
        factions: Array,
        qualities: Array,
        races: Array,
        locales: Object
    })


    const getInfo = () => {
        setIsloading(true);
        fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', headers)
            .then(res => res.json())
            .then(data => setInfo(data))
            .catch(err => console.log(err))
            .finally(() => setIsloading(false));
    }


    const [cards, setCards] = useState<Array<any>>([]);


    const getCards = (url: string) => {
        setIsloading(true);
        fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', headers)
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(err => console.log(err))
            .finally(() => setIsloading(false));
    }



    return <CardContext.Provider value={{
        isLoading,
        info,
        cards
    }}>{children}</CardContext.Provider>



}

export default CardContext;