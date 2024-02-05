import React from 'react'

export default function NavBar({changeMode}) {
  return (
    <div>
        <button className="mode" onClick={()=>changeMode('work')}>Work mode</button>
        <button className="mode" onClick={()=>changeMode('break')}>Break mode</button>
    </div>
  )
}
