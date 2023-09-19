import React from 'react'

const Square = ({squares, handleClick, restart}) => {
  return (
    <div className="grid">
      {/* this map function creates the grid */}
      {squares.map((squares,index) => (
        <div 
          key={index} 
          className="square"
          onClick={() => handleClick(index)}
        >
          {squares}
        </div>
      ))}
      {/* this button calls the restart function*/}
      <button onClick={() => restart()}>Restart</button>
    </div>
  )
}
export default Square
