import React, { useContext, useState } from 'react'
import CardContext from '../../../context/CardContext'
import ByClassElement from './ByClassElement';

function ByClass() {

    const {
        isLoading,
        cards,
        getCards
    } = useContext(CardContext);

    const [input, setInput] = useState<String>("");

    return (
        <div className=''>
            <form className='form-control w-full max-w-xs my-10 mx-auto' onSubmit={(e) => {
                e.preventDefault();
                getCards(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${input}`);
            }}>
                <label className='label-text text-2xl' htmlFor='raceTextBox'>Race:</label>
                <div className='flex gap-2'>
                    <input id='raceTextBox' className='input input-bordered w-full max-w-xs bg-secondary focus:bg-secondary focus:outline-none' type='text' onChange={(e) => setInput(e.target.value)} />
                    <button type='submit' className='btn btn-primary'>Search</button>
                </div>
            </form>
            <div className='mt-20'>
                {
                    isLoading ?
                        <div className='mx-auto'>Loading...</div>
                        :
                        (
                            (cards.message && <>No cards found!</>) ||
                            (cards.length > 0 &&
                                (
                                    <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-4 justify-items-center'>
                                        {
                                            cards.map((card: any, index: React.Key) => (
                                                <ByClassElement {...card} key={index} />

                                            ))
                                        }
                                    </div>
                                )
                            )
                        )
                }
            </div>
        </div>
    )
}

export default ByClass