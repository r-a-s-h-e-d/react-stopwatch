import { useState } from 'react'
import Title from './Title'
import Countdown from './Countdown'
import Controller from './Controller'
import Laps from './Laps'

function App() {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [mil, setMil] = useState(0)
  const [stt, setStt] = useState(0)
  const [lap, setLap] = useState([{ min: 1, sec: 2, mil: 3 }])

  const startCount = () => {
    let mins = min
    let secs = sec
    let mils = mil
    const loop = () => {
      if (mils >= 10) {
        secs++
        mils = 0
      }
      if (secs >= 60) {
        mins++
        secs = 0
      }
      mils++
      setMin(mins)
      setSec(secs)
      setMil(mils)
    }
    setStt(setInterval(loop, 100))
  }

  const startPause = () => {
    clearInterval(stt)
  }

  const startLap = () => {
    setLap(...lap, { min, sec, mil })
  }

  const startReset = () => {
    setMin(0)
    setSec(0)
    setMil(0)
  }

  return (
    <div className="app">
      <Title />
      <Countdown min={min} sec={sec} mil={mil} />
      <Controller
        count={startCount}
        stop={startPause}
        doLap={startLap}
        doReset={startReset}
      />
      <Laps getLap={lap} />
    </div>
  )
}

export default App
