import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [value, setValue] = useState(false)
  const handleClick = (selectedIndex) => {
    if (value === false) {
      squares[selectedIndex]= "❌"
      setSquares([...squares])
      setValue(true)
    } else {
      squares[selectedIndex] ="⭕️"
      setSquares([...squares])
      setValue(false)
    }
  }
console.log(value, "value")
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} value={value} handleClick={handleClick}/>
    </>
  )
}

export default App