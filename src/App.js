import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [value, setValue] = useState(true)
  // const [selectedIndexArray, setSelectedIndexArray] = useState([])
  const [selectedX, setSelectedX] = useState([])
  const [selectedO, setSelectedO] = useState([])
  const handleClick = (selectedIndex) => {
    if (squares[selectedIndex] === null && !winner()) {
      if(value){
        squares[selectedIndex] = "❌"
        setSelectedX([...selectedX, selectedIndex])
      } else {
        squares[selectedIndex] =  "⭕️"
        setSelectedO([...selectedO, selectedIndex])
      } 
      setSquares([...squares])
      setValue(!value)
      // setSelectedIndexArray([...selectedIndexArray,selectedIndex])
      }
      // console.log(selectedIndexArray, "selectedindexarray")
  }
// console.log(value, "value")
const winner = () => {
    const winningArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ]
    for (let index = 0; index < winningArray.length; index++) {
      const [a, b, c] = winningArray[index];
    if (
      selectedX.includes(a) &&
      selectedX.includes(b) &&
      selectedX.includes(c)
    ){
      return "❌ player wins"
    } else if (
      selectedO.includes(a) &&
      selectedO.includes(b) &&
      selectedO.includes(c)
    ){
      return "⭕️ player wins"
    } 
    }

    if (selectedX.length + selectedO.length === 9) {
      return "Game ended no player wins"
    }
    return null
  }
  const winningPlayer = winner()
  const restart = () => {
    setValue(true)
    setSelectedO([])
    setSelectedX([])
    setSquares(Array(9).fill(null))

  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square 
      squares={squares} 
      value={value} 
      handleClick={handleClick}
      restart={restart}
      />
      {winningPlayer}
    </>
  )
}

export default App