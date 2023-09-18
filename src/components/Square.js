import React from 'react'

const Square = ({squares, handleClick}) => {
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
    </div>
  )
}
export default Square
