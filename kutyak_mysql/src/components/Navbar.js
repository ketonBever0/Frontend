import {Link} from 'react-router-dom';


function Navbar() {
  return (
  <div className='px-10 navbar bg-sky-100'>
  <div className="navbar bg-sky-100" style={{position:"relative",zIndex:"1"}}>
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-3xl">Rendelő</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
     
      <li tabIndex={0}>
        
          <span className='text-xl'>Kutyanevek</span>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        
        <ul className="p-2 bg-base-100 text-base'">
          <li><Link to='/kutyanevek' className='text-base'>Kutyanevek listája</Link></li>
          <li><Link to='/ujkutyanev' className='text-base'>Új kutyanév felvitele</Link></li>
        </ul>
      </li>
      <li tabIndex={1}>
        
          <span className='text-xl'>Kutyafajták</span>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        
        <ul className="p-2 bg-base-100 text-base'">
          <li><Link to='/kutyafajtak'  className='text-base'>Kutyanfajták listája</Link></li>
          <li><Link to='/ujkutyafajta' className='text-base'>Új kutyafajta felvitele</Link></li>
        </ul>
      </li>
      <li tabIndex={2}>
        
        <span className='text-xl'>Rendelési adatok</span>
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
      
      <ul className="p-2 bg-base-100 text-base'">
        <li><Link to='/kutyak'  className='text-base'>Rendelési adatok listája</Link></li>
        
      </ul>
    </li>
     
    </ul>
  </div>
</div>
</div>  
  )
}

export default Navbar