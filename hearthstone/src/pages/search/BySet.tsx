import React, { useContext, useState } from 'react'
import SearchResultElement from '../../components/SearchResultElement';
import CardContext from '../../context/CardContext';
import { GridLoader } from 'react-spinners';

function BySet() {
    const {
        isLoading,
        cards,
        getCards
    } = useContext(CardContext);

    const [input, setInput] = useState<String>("");

    const [filterOptions, setFilterOptions] = useState<any>({
        mustHaveImg: false,
        mustHaveDescription: false
    });

    return (
        <div>
            <form className='form-control w-full max-w-xs my-10 mx-auto' onSubmit={(e) => {
                e.preventDefault();
                getCards(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${input}`);
            }}>
                <label className='label-text text-2xl' htmlFor='raceTextBox'>Set:</label>
                <div className='flex gap-2'>
                    <input id='raceTextBox' className='input input-bordered w-full max-w-xs bg-secondary focus:bg-secondary focus:outline-none' type='text' onChange={(e) => setInput(e.target.value)} />
                    <button type='submit' className='btn btn-primary'>Search</button>
                </div>
            </form>

            <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-4 mt-10 justify-items-center'>
                <div>
                    <label htmlFor="mustHaveImg">Must Have Image: </label>
                    <input type='checkbox' id='mustHaveImg' checked={filterOptions.mustHaveImg} defaultChecked={false} onChange={(e) => setFilterOptions({
                        ...filterOptions,
                        [e.target.id]: e.target.checked
                    })} />
                </div>
                <div>
                    <label htmlFor="mustHaveImg">Must Have Description: </label>
                    <input type='checkbox' id='mustHaveDescription' checked={filterOptions.mustHaveDescription} defaultChecked={false} onChange={(e) => setFilterOptions({
                        ...filterOptions,
                        [e.target.id]: e.target.checked
                    })} />
                </div>
            </div>

            <div className='mt-20'>
                {
                    isLoading ?
                    <p className='text-center'><GridLoader color="#0cafee" /></p>
                        :
                        (
                            (cards.message && <p className='text-center'>No cards found!</p>) ||
                            (cards.length > 0 &&
                                (
                                    <div className='grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 justify-items-center'>
                                        {
                                            cards
                                                .filter((x: any) => filterOptions.mustHaveImg ? x.img : 1 == 1)
                                                .filter((x: any) => filterOptions.mustHaveDescription ? x.text : 1 == 1)
                                                .map((card: any, index: React.Key) => (
                                                    <SearchResultElement {...card} key={index} />

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

export default BySet