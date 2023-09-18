import React from 'react'

const Square = (props) => {
  return (
    <div className="grid">
      {props.squares.map((squares,index) => (
        <div key={index} className="square"></div>
      ))}
    </div>
  )
}
export default Square
