import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";

export default function RandomUsers() {

    // Típusdefiniálás, itt nincs itt az összes adat, csak a fontosabbak
    type RandomUserType = {
        gender: string;
        name: {
            title: string;
            first: string;
            last: string;
        };
        email: string;
        picture: {
            thumbnail: string;
            medium: string;
            large: string;
        }
    }

    // Használhatnánk any típust is
    const [randomUsers, setRandomUsers] = useState<RandomUserType[]>([]);
    // A loading state segítségével jelezzük, hogy a kérés folyamatban van
    const [loading, setLoading] = useState(false);


    const addUser = () => {
        // Igazra állítjuk a loading state értékét
        setLoading(true);
        axios.get("https://randomuser.me/api/")
            .then((res: AxiosResponse) => {
                // A válaszban kapott adatokat hozzáadjuk a state-hez
                // randomUsers.push(res.data.results[0]);
                // setRandomUsers([...randomUsers, res.data.results[0]]);
                // A ...prev tartalmazza az előző állapotot, míg a res.data.results[0] az új elemet fűzi hozzá
                setRandomUsers(prev => [...prev, res.data.results[0]]);
                // Az első két megvalósítás is működik, de ezutóbbi megbízhatóbb
            })
            .finally(() => {
                // A finally ág mindig lefut, így hiba esetén is hamisra áll a loading state
                setLoading(false);
            });
    }


    // A useEffect mindig lefut a komponens betöltődésekor
    useEffect(() => {
        // addUser();
        console.log("User Fecth")
    }, []);
    // Itt ne hagyjuk ki a tömböt, vagyis a dependency array-t, mert akkor a useEffect folyamatosan lefut
    // Üres tömb esetén csak a komponens betöltődésekor fut le
    // (ne zavarjon minket az, hogy kétszer fut le - ez a fejlesztői mód miatt van, de a kibuildelt változaban csak egyszer fog)
    // A tömbbe csak state-eket tegyünk - ha bármelyik is változik újra lefut a useEffect

    return (
        <div>

            <h1 className="text-3xl text-white text-center mb-8">Random Users</h1>
            {/* Itt az onClick-ben van a függvény implementáció */}
            <button onClick={() => addUser()} className="justify-center items-center w-full bg-amber-950 transition hover:bg-amber-950/75 p-4 cursor-pointer flex gap-2 border-2 border-amber-900 rounded-2xl mb-6">
                <span><FaUserPlus color="green" size={24} /></span>
                <span className="text-white">Add</span>
                {/* <span><FaUserPlus color="green" size={24} /></span> */}
            </button>

            {/* Itt használhatunk gridboxot is, de ott kézzel kell megadni a kijelző töréspontokat (pl. md:, sm:), itt a flex-wrap segít az elrendezésben */}
            <div className="flex justify-around flex-wrap gap-4">

                {/* A map függvény bejárja a tömböt, és kirendereli a példányokat - előtte egy feltétel van */}
                {randomUsers.length > 0 && randomUsers.map((user, index) => (

                    <div key={index} className="group relative block bg-black p-4 rounded-2xl text-gray-400 overflow-hidden m-6">
                        <img
                            alt=""
                            src={user.picture.large}
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{user.gender}</p>
                            <p className="text-xl font-bold text-white sm:text-2xl">{user.name.title} {user.name.first} {user.name.last}</p>
                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Betöltés esetén érdemes odarakni egy ezt jelző szöveget vagy spinnert */}
                {loading && <div className="animate-pulse bg-black p-4 rounded-2xl text-gray-400 text-center">Fetching User...</div>}
            </div>

        </div>
    )
}
