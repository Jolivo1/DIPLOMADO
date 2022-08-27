
import React from 'react'

const Eventos = () => {
    const click = () =>{
        console.log('Lo hiciste bien')
    }
  return (
    <div>
        <hr/>
        <h1>Eventos</h1>
        <button className='btn btn-primary' onClick={()=> click()}>button</button>
    </div>
  )
}

export default Eventos