import {SiDatadog} from 'react-icons/si'

function Header() {
  return (
    <div className='flex flex-row justify-center items-center'>
    <p className='text-5xl '>Állatorvosi rendelő </p> <SiDatadog size={80}/>
    </div>
  )
}

export default Header