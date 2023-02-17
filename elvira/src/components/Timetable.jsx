import React, { useState } from 'react'
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';

function Timetable({ table }) {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1600,
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>

            <div className="card min-w-full bg-orange-600 text-primary-content my-5 cursor-pointer" onClick={openModal}>
                <div className="card-body min-h-fit">
                    <div className="flex flex-row min-h-fit">
                        <div className="basis-1-6 shrink max-w-min absolute left-0"><div className='relative left-4 bottom-10'>Class: {table.class}</div><div className="rotate-270 mt-10 relative bottom-6">{table.type || "(type not provided)"}</div></div>
                        <div className="basis-1/4 relative left-5">{table.details[0].from}<br /><br />{table.details[0].dep}</div>
                        <div className="basis-1/3 relative left-10">{"------->"}<br /><br />Changes: {table.change || 0}</div>
                        <div className="basis-1/4 absolute right-4">{table.details[table.details.length - 1].from}<br /><br />{table.details[table.details.length - 1].dep}</div>
                    </div>




                </div>
            </div>

            <div>
                {/* <Button onClick={openModal}>Open modal</Button> */}
                <Modal
                    open={isOpen}
                    onClose={closeModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <Typography variant="h5" component="h2">Train information</Typography>
                        <Typography variant="h6" component="h2" sx={{ mt: 4 }}>Stops</Typography>
                        <Typography>
                            {table.details && table.details.map((detail, index) => (<Typography sx={{ mt: 2 }} key={index}>{index + 1}. - {detail.dep} {detail.from}</Typography>))}
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>

    )
}

export default Timetable