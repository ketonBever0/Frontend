import { useState } from "react";


function Main() {

    // React-ben változók helyett state-ket használunk, mert az értékük változásakor újrarenderelődik a komponens a változásokkal ellentétben
    const [count, setCount] = useState(0);
    // A state-k változtatására setter függvényeket használjuk, ami itt a setCount

    // A változók értéke nem változik, mert nem renderelődik újra a komponens
    let number: number = 0;

    // Konstansokat használunk, ha az érték nem változik
    const title: string = "Sample React App";

    return (
        <div>
            <h1 className="text-3xl text-white text-center mb-8">{title}</h1>
            <div className="flex gap-4">
                <button className="rounded-4xl bg-amber-800 border-2 border-amber-700 p-4 cursor-pointer text-white"
                    // onClick={setCount(prev => prev + 1)} // Ezt a TypeScript nem engedi, sima JavaScript-ben folyamatosan lefutna
                    // Függvény attribútum esetén a függvényt arrow function-ban kell meghívni
                    onClick={() => setCount(prev => prev + 1)} // Itt használjuk az előző állapotot (prev) és ahhhoz adjuk hozzá az 1-et
                >
                    {/* Itt {}-k közé tesszük a konstansokat és a state-eket */}
                    Count: {count}
                </button>

                {/* Hagyományos változók értéke nem változik */}
                <button className="rounded-4xl bg-amber-800 border-2 border-amber-700 p-4 cursor-pointer text-white"
                    onClick={() => number++}
                >
                    Var Count: {number}
                </button>
            </div>
        </div>
    )
}

export default Main