import React from 'react'

function Timetable({ table }) {
    return (
        <div>

            <div className="card min-w-full bg-orange-600 text-primary-content my-5">
                <div className="card-body min-h-fit">
                    <div className="flex flex-row min-h-fit">
                        <div className="basis-1-6 shrink max-w-min absolute left-0"><div className='relative left-4 bottom-10'>Class: {table.class}</div><div className="rotate-270 mt-10 relative bottom-6">{table.type || "(type not provided)"}</div></div>
                        <div className="basis-1/4 relative left-5">{table.details[0].from}<br /><br />{table.details[0].dep}</div>
                        <div className="basis-1/3 relative left-10">{"------->"}<br /><br />Changes: {table.change || 0}</div>
                        <div className="basis-1/4 absolute right-4">{table.details[table.details.length - 1].from}<br /><br />{table.details[table.details.length - 1].dep}</div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Timetable