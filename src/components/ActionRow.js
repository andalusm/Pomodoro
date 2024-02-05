import React from 'react'
import { faRefresh, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ActionRow({activateAction, resetClicked, currentAction}) {
  return (
    <div>
      <button className="button" id="reset" onClick={()=>resetClicked()}>  <FontAwesomeIcon icon={faRefresh}/></button>
  <button className="button" id="toggle" onClick={()=>activateAction()}>{currentAction === "Start"?<FontAwesomeIcon icon={faPlay}/>:<FontAwesomeIcon icon={faPause}/>}</button>
        
    </div>
  )
}
