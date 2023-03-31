import React from 'react'

function SearchResultElement(card: {
    img: string,
    name: string,
    text: string,
    cardSet: string,
    playerClass: string
}) {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>{card.img ? <img src={card.img} /> : <p className='mt-3 text-xs'>(no image provided)</p>}</figure>
                <div className="card-body">
                    <h2 className="card-title">{card.name}</h2>
                    <p className='my-3' dangerouslySetInnerHTML={{ __html: card.text }} />
                    <div className="card-actions justify-end">
                        <p className="rounded-3xl p-1.5 bg-neutral text-center"><b>Class:</b><br />{card.playerClass}</p>
                        <p className="rounded-3xl p-1.5 bg-neutral text-center"><b>Set:</b><br />{card.cardSet}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultElement