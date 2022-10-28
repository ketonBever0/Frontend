import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        {/* <h3><i className="bi bi-car-front-fill"></i></h3> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to='/' className="nav-link">Főoldal</Link>
          <Link to='/rendelesiadatok' className="nav-link">Rendelési adatok</Link>
          <Link to='/kutyanevek' className="nav-link">Kutyanevek</Link>
          <Link to='/kutyafajtak' className="nav-link">Kutyafajták</Link>
          <Link to='/nevjegy' className="nav-link">Névjegy</Link>
          
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar