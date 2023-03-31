import { createContext, useState } from "react";


const CardContext = createContext<any | null>(null);

export const CardProvider = ({ children }: any) => {


    //  !!!!!!  API KEY !!!!!!

    const api_key: String = 'd33319bbe6msh21c902c89c92a55p1b82b7jsn702e1ba7bd69';

    //  !!!!!!  API KEY !!!!!!



    const headers: any = {
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

    const [isInfoAvailable, setIsInfoAvailable] = useState<boolean>(false);

    const getInfo = async () => {
        setIsInfoAvailable(false);
        await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', { headers: headers })
            .then(res => res.json())
            .then(data => {
                setInfo(data);
                setIsInfoAvailable(true);
            })
            .catch(err => console.log(err))
    }


    const [cards, setCards] = useState<Array<any> | Object>([]);


    const getCards = async (url: string) => {
        setIsloading(true);
        await fetch(url, { headers: headers })
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(err => console.log(err))
            .finally(() => setIsloading(false));
    }



    return <CardContext.Provider value={{
        isLoading,
        info,
        cards, setCards,
        getInfo,
        getCards,
        isInfoAvailable
    }}>{children}</CardContext.Provider>



}

export default CardContext;