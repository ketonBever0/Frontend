function Main() {
  return (
    <div className="hero min-h-screen bg-sky-100 ">
      <div className="hero-content rounded-lg bg-sky-200 flex-col lg:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Cocktail Kereső</h1>
          <p className="py-6">
            Koktélok keresése név, összetevő, kezdőbetű szerint.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Main;
