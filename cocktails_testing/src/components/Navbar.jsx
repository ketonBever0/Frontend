import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-sky-900 text-sky-100">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-xl">Főoldal</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/letter">Kezdőbetű</Link></li>
        <li><Link to="/ingredient">Összetevő</Link></li>
        <li><Link to="/name">Név</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar