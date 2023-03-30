import React from 'react'

function ByClassElement(card: {
    img: string,
    name: string,
    text: string
}) {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>{card.img ? <img src={card.img} /> : <p className='mt-3 text-xs'>(no image provided)</p>}</figure>
                <div className="card-body">
                    <h2 className="card-title">{card.name}</h2>
                    <p dangerouslySetInnerHTML={{ __html: card.text }} />
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ByClassElement