import React, { useContext } from 'react'
import { BarLoader } from 'react-spinners';
import TimetableContext from './context/timetableContext';
import Timetable from './Timetable';

function TimetableContainer() {


    const {
        isLoading,
        timetable
    } = useContext(TimetableContext);



    return (
        <div>
            <div className="mt-14">
                <BarLoader color="#36d7b7" height={10} width={200} loading={isLoading} cssOverride={{ display: "block", margin: "auto", marginTop: "7rem" }} />
                {!isLoading && timetable && timetable.map((table, index) => (<Timetable table={table} key={index} />))}
            </div>
        </div>
    )
}

export default TimetableContainer