import KutyafajtaContext from '../context/KutyfajtaContext';
import {useContext} from 'react';
import KutyafajtaRender from './KutyafajtaRender';

function KutyafajtaLista() {
    const {kutyafajtak}=useContext(KutyafajtaContext);
  return (
    <div className='flex justify-center items-center'>
        <div className='flex-column'>
        {
            kutyafajtak.map((elem,index)=>(<KutyafajtaRender key={index} kutyafajta={elem} />))
        }
        </div>
    </div>
  )
}

export default KutyafajtaLista