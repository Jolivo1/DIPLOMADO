import React from 'react'

const Variables = () => {
    const texto1 = 'Buenas tardes'
    const texto2 = 'Como estas?'
    const img = 'https://indiehoy.com/wp-content/uploads/2022/05/naruto.jpg'
    return (
    <div>
        <hr/>
        <h2>Variables</h2>
        <h3>Variables en jsx, {texto1}, {texto2}</h3>
        <img src={img} alt="Imagen naruto"/>
    </div>
  )
}

export default Variables