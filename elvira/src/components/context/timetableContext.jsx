import React, { useState, useEffect, createContext } from 'react';
import Notify from '../allUse/Toasts';


const TimetableContext = createContext();


export const TimetableProvider = ({ children }) => {


    const [isLoading, setIsLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [timetable, setTimetable] = useState(null);
    const [formData, setFormData] = useState({
        from: "",
        to: ""
    });

    const update = () => setRefresh(prev => !prev);


    const fetchTable = async (form) => {
        if (form.from != "" && form.to != "") {
            setIsLoading(true);
            setTimetable(null);
            await fetch(encodeURI(`https://apiv2.oroszi.net/elvira?from=${form.from}&to=${form.to}`))
                .then(res => res.json())
                .then(data => {
                    if (data.statusCode != 500) {
                        return setTimetable(data.timetable);
                    } else {
                        Notify.tError("No timetables found");
                    }
                })
                .catch(err => { Notify.tError("Something went wrong!"); console.log(err); });
            setIsLoading(false);
        } else if (form.from == "" && form.to == "") {
            Notify.tError("Missing required stations!");
        } else if (form.from == form.to) {
            Notify.tError("From and To station must be different!");
        }

    }



    return <TimetableContext.Provider value={{
        refresh, update,
        isLoading, setIsLoading,
        timetable, setTimetable,
        formData, setFormData,
        fetchTable
    }}>{children}</TimetableContext.Provider>

}

export default TimetableContext;