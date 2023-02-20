import React, { useState } from 'react'
import ReactModal from 'react-modal';

function Timetable({ table }) {

    const [isOpen, setIsOpen] = useState(false);

    const modalStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: "black",
        },
    };


    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);



    return (
        <div>

            <div className="card min-w-full bg-orange-900 text-primary-content my-5 cursor-pointer" onClick={openModal}>
                <div className="card-body min-h-fit p-0">

                    <div className="grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="mb-5 md:max-w-fit"><div className=''>Class: {table.class}</div><div className="md:rotate-270 md:mt-20">{table.type || ""}</div></div>
                        <div className="mb-5">{table.details[0].from}<br /><br />{table.details[0].dep}</div>
                        <div className="mb-5">{"------->"}<br /><br />Transfers: {table.change || 0}</div>
                        <div className="mb-5">{table.details[table.details.length - 1].from}<br /><br />{table.details[table.details.length - 1].dep}</div>
                    </div>


                </div>
            </div>

            <ReactModal
                isOpen={isOpen}
                contentLabel="onRequestClose Example"
                onRequestClose={closeModal}
                style={modalStyle}
                ariaHideApp={false}
            >
                <h3 className="text-3xl mb-6 text-primary-content">Total time: {table.totaltime}</h3>
                <h3 className="text-3xl mb-6 text-primary-content">Stops:</h3>
                {table.details.map((detail, index) => (
                    <ol key={index} className="list-none">
                        {detail.platform != "" && <p className='text-center my-2 text-primary-content'>TRANSFER</p>}
                        <li className='text-primary-content'>{index + 1}. {detail.dep} - {detail.from}</li>
                    </ol>
                ))}
                <button className='btn mt-6 mx-auto' onClick={closeModal}>Close</button>
            </ReactModal>

        </div>
    )
}

export default Timetable