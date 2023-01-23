import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Menu() {

    const token = sessionStorage.getItem('usertoken');



    const setMenu = () => {
        if (token) {
            return (
                <>
                    <li><Link to={'/'}>Felhasználó adatai</Link></li>
                </>
            )
        } else {
            return (
                <>
                    <li><Link to={'/'}>Felhasználó adatai</Link></li>
                    <li><Link to={'/register'}>Regisztráció</Link></li>
                    <li><Link to={'/login'}>Bejelentkezés</Link></li>
                </>
            )
        }
    }



    return (
        <div>
            <ul className="menu menu-horizontal bg-base-100">
                {
                    setMenu()
                }



            </ul>
        </div>
    )
}

export default Menu


// var isThereToken = false;

//     useEffect(() => {

//         if (token) {
//             isThereToken = true;
//         } else {
//             isThereToken = false;
//         }

//     }, [token])



    // if (isThereToken) {
    //     return (
    //         <div>
    //             <ul className="menu menu-horizontal bg-base-100">
    //                 <li><Link to={'/'}>Felhasználó adatai</Link></li>
    //             </ul>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <ul className="menu menu-horizontal bg-base-100">
    //                 <li><Link to={'/'}>Felhasználó adatai</Link></li>
    //                 <li><Link to={'/register'}>Regisztráció</Link></li>
    //                 <li><Link to={'/login'}>Bejelentkezés</Link></li>
    //             </ul>
    //         </div>
    //     )
    // }