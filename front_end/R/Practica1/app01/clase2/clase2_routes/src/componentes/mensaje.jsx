import React from 'react'

const mensaje = () => {
  return (
    <div>
        <h2>Buenos dias {props.nombre}</h2>
        <p>Su edad es: {props.edad}</p>
        
        <p></p>
    </div>
  )
}

export default mensaje