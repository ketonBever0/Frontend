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
                {!isLoading && timetable &&
                    <div className="alert alert-info shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Click one of these cards for more information.</span>
                        </div>
                    </div>}
                <BarLoader color="#36d7b7" height={10} width={200} loading={isLoading} cssOverride={{ display: "block", margin: "auto", marginTop: "7rem" }} />
                {!isLoading && timetable && timetable.map((table, index) => (<Timetable table={table} key={index} />))}
            </div>
        </div>
    )
}

export default TimetableContainer