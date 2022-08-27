import React from 'react'

const Formulario = () => {
  const [nombre, setNombre] = React.useState('')
  const [apellido, setApellido] = React.useState('')
  const [lista, setLista] = React.useState([])
  

    //guardar datos
    const guardarDatos =(e)=>{
      e.preventDefault()
        // validaciones
    if (!nombre.trim() || !apellido.trim()) {
      alert('Rellene todos los campos')
      return
      
    }

      setLista(
        [
          ...lista,
          {nombre: nombre, apellido: apellido}
        ]
      )
      // limpiar estado
      setNombre('')
      setApellido('')
      //limpiar campos
      e.target.reset()
     
    }
  return (
    <div>
        <hr/>
        <h2>Formulario de Registro</h2>
    <form onSubmit={guardarDatos}>
    <div className="mb-3">
    <label  className ="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre" onChange={e => setNombre(e.target.value)}/>
    </div>
     <div className="mb-3">
    <label  className="form-label">Apellido</label>
    <input type="text" className="form-control" id="apellido" onChange={e => setApellido(e.target.value)}/>
     </div>
  <button type='submit' className="btn btn-primary">Submit</button>
  </form>

  <hr/>
  <ul>
            {
                lista.map((elemento)=>(
                    <li key={elemento.nombre} type="1">{elemento.nombre} {elemento.apellido}</li>
                ))
            }
        </ul>

<br/>
<br/>
<hr/>
    </div>
  )
}

export default Formulario