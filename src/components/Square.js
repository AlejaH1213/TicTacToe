import React from 'react'

const Square = ({squares, handleClick, restart}) => {
  return (
    <div className="grid">
      {squares.map((squares,index) => (
        <div 
          key={index} 
          className="square"
          onClick={() => handleClick(index)}
        >
          {squares}
        </div>
      ))}
      <button onClick={() => restart()}>Restart</button>
    </div>
  )
}
export default Square
