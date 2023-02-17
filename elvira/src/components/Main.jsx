import React, { useContext } from 'react'
import TimetableContext from './context/timetableContext';

function Main() {

    const {
        isLoading, setIsLoading,
        timetable, setTimetable,
        formData, setFormData,
        fetchTable
    } = useContext(TimetableContext);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }



    return (
        <div>
            <form onChange={handleChange} onSubmit={async (e) => { e.preventDefault(); await fetchTable(formData); }}>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">From:</span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                        <input type="text" name="from" value={formData.from} defaultValue="" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {/* <span className="label-text-alt">Alt label</span> */}
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">To:</span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                        <input type="text" name="to" value={formData.to} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {/* <span className="label-text-alt">Alt label</span> */}
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>

                    </div>

                </div>
                <button type="submit" className='btn btn-primary mt-12'>Search</button>
            </form>

        </div>
    )
}

export default Main