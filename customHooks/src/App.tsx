
import './App.css'
import { useTime } from './hooks/useTime'

function App() {
  const day = useTime("day")
  const hour = useTime("hour")

  return (
    <>
      <div>Hour: {hour}</div>
      <div>Day: {day}</div>
    </>
  )
}

export default App
