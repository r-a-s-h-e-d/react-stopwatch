import Button from './Button'
import { useState } from 'react'

const Controller = ({ count, stop, doLap, doReset }) => {
  const [start, setStart] = useState(true)
  const [pause, setPause] = useState(false)
  const [lap, setLap] = useState(false)
  const [reset, setReset] = useState(false)

  const startToggle = () => {
    setStart(false)
    setPause(true)
    setReset(false)
    setLap(true)
    count()
  }

  const pauseToggle = () => {
    setStart(true)
    setPause(false)
    setReset(true)
    setLap(false)
    stop()
  }

  const lapToggle = () => {
    doLap()
  }

  const resetToggle = () => {
    setStart(true)
    setPause(false)
    setReset(false)
    setLap(false)
    doReset()
  }

  return (
    <div>
      {start && <Button text="Start" color="green" onClick={startToggle} />}
      {pause && <Button text="Pause" color="orange" onClick={pauseToggle} />}
      {lap && <Button text="Lap" color="blue" onClick={lapToggle} />}
      {reset && <Button text="Reset" color="red" onClick={resetToggle} />}
    </div>
  )
}

export default Controller
