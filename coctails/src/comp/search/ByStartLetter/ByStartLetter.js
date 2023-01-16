import React from 'react'

function ByStartLetter() {


  
  return (
    <div>
      <div className="text-2xl mb-8">Kezdőbetű szerint</div>
      <form action="">
        <input type="text" placeholder="Koktél kezdőbetűje neve" className="input input-bordered input-primary w-full max-w-xs mb-20" />
        <button className="btn btn-secondary ml-5" type="submit">Button</button>
      </form>
    </div>
  )
}

export default ByStartLetter