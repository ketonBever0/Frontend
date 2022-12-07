import { useLocation } from 'react-router-dom'
import Terkep from './Terkep';
import Vissza from './Vissza';


function TelepulesAdat() {


    const { state } = useLocation();
    // const { Telepules } = state;



    return (
        <div>
            <Vissza />
            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center"><h2 className='text-3xl font-bold sm:text-4xl'>{state.nev}</h2></div>
                    <p>{state.long} {state.lat}</p>


                    <Terkep long={state.long} lat={state.lat} szeles={"700ox"} magassag={"600px"} zoom={12} />

                </div>
            </section>

        </div>
    )
}

export default TelepulesAdat