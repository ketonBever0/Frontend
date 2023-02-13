function Cocktail({cocktail}) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-5">
      <figure>
        <img className="w-48" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </figure>
      <div className="card-body w-48">
        <h2 className="card-title">{cocktail.strDrink}</h2>
        <p>{cocktail.strCategory}</p>
        <p>{cocktail.strAlcoholic}</p>
        <div className="card-actions justify-end">
        
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
