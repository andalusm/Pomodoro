import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import ActionRow from './components/ActionRow';

function App() {
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('01')
  const [timer, setTimer] = useState(null)
  const [isWorkMode, setIsWorkMode] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const tick = function () {
    setSeconds((prevSeconds) => {
    if (Number(minutes) === 0 && Number(prevSeconds) === 0) {
      finished()
    }
    else {
        if (prevSeconds === '00') {
          setMinutes((newMinutes) => Number(newMinutes) <= 10 ? "0" + (Number(newMinutes) - 1) : "" + (Number(newMinutes) - 1))
          setSeconds('59')
        }
        else {
          const newSeconds = Number(prevSeconds) <= 10 ? "0" + (Number(prevSeconds) - 1) : "" + (Number(prevSeconds) - 1)
          setSeconds(newSeconds)
        }
      }
    })



  }
  const pause = function () {
      setIsActive(false)
      clearInterval(timer)
  }
  const reset = function () {
    pause()
    if (isWorkMode) {
      setMinutes('25')
      setSeconds('00')
    }
    else {
      setMinutes('05')
      setSeconds('00')
    }
  }
  const finished = function () {
    pause()
    if (!isWorkMode) {
      changeMode("work")
    }
    else {
      changeMode("break")
    }
  }
  const changeMode = function (mode) {
    if (mode === 'work') {
      setMinutes('25')
      setSeconds('00')
      setIsWorkMode(true)
    }
    else {
      setMinutes('05')
      setSeconds('00')
      setIsWorkMode(false)
    }
  }

  const start = function () {
    if (!isActive) {
      setIsActive(()=>true)
      setTimer(setInterval(
        tick, 1000))

    }


  }

  return (
    <>
    <div className="control clearfix">
  <div className="control-session">
    <span className="control-title">Work</span>
     &nbsp; <span id="session">25</span> &nbsp; 
  </div>
  <div className="control-break">
    <span className="control-title">Break</span>
     &nbsp; <span id="break">5</span> &nbsp; 
  </div>
</div>
<div className={isWorkMode? "pomodoro session": "pomodoro break"}>
  <div className="title">POMODORO CLOCK</div>
  <div className="status">{isWorkMode? "Work": "Break"}</div>
  <div className="timer"><Clock minutes={minutes} seconds={seconds}></Clock></div>
  <ActionRow activateAction={!isActive ? start : pause} resetClicked={reset} currentAction={!isActive ? "Start" : "Pause"}></ActionRow>
  <NavBar changeMode={changeMode}></NavBar>
</div>
      
      
      
    </>
  );
}

export default App;
