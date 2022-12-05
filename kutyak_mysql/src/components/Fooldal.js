import {SiDatadog} from 'react-icons/si';

function Fooldal() {
  return (
    <div className='my-10 mx-5'>
    <div className="card card-side bg-sky-200 shadow-xl" style={{position:"relative",zIndex:"0"}}>
    <figure><SiDatadog /></figure>
    <div className="card-body">
      <h2 className="card-title">Üdvözli az állatorvosi rendelő!</h2>
      <p>Kattintson a kívánt menüpontra!</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
  </div>
  </div>
  )
}

export default Fooldal