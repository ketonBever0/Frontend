import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div>
            <ul className="menu menu-horizontal bg-base-100">
                <li><Link to={'/'}>Felhasználó adatai</Link></li>
                <li><Link to={'/register'}>Regisztráció</Link></li>
                <li><Link to={'/login'}>Bejelentkezés</Link></li>


            </ul>
        </div>
    )
}

export default Menu