import React from 'react'

const Contador = () => {
    const [contador, setContador] = React.useState(0)
    const aumentar =() =>{
        setContador(contador+1)
    }
    const Disminuir =() =>{
        setContador(contador-1)
    }
  return (
    <div>
        <hr/>
        <h1>Contador</h1>
        <h3>Ejemplo contador</h3>
        <h4>Contador: {contador}</h4>
        <button className='btn btn-primary' onClick={()=>aumentar()}>aumentar</button>
        <button className='btn btn-primary' onClick={()=>Disminuir()}>Disminuir</button>
        <h5>{contador%2 === 0 ? 'es par' : 'Es impar'}</h5>
    </div>
  )
}

export default Contador