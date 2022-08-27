import React,{useState} from 'react'


const Estados = () => {
    //hook de estado
    const [texto, setTexto] = useState('Texto inicial desde estado')
    const cambiar = () =>{
        setTexto('texto cambiado desde estado boton')
    }
  return (
    <div>
        <hr/>
        <h2>Estados</h2>
        <h3>{texto}</h3>
        <button className='btn btn-primary' onClick={()=> cambiar()} type="">Cambiar Texto</button>
    </div>
  )
}

export default Estados

////////rafce//////////////