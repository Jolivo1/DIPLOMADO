console.log("hola")
const datos=[{
    "id": 1,
    "nombre": "juan",
    "apellido": "perez"
    },
    {
    "id": 2,
    "nombre": "maría",
    "apellido": "rodriguez"
    },
    {
    "id": 3,
    "nombre": "miguel",
    "apellido": "gonzalez"
    }]
 
   
    //promesas
    /*const buscarDatoIdProm=(id)=>{
        const objeto=datos.find(
            (item)=>item.id===id
        )
        return new Promise(
            (resolve,reject)=>{
                if(objeto){
                   resolve(objeto) 
                }else{
                    reject('No se encontró el objeto con id: '+id)
                }
            })
    }*/
    const buscarDatoIdProm=(id)=>{
        const objeto=datos.find(
            (item)=>item.id===id
        )
        return new Promise(
            (resolve,reject)=>{
                //operador ternario
                objeto ? resolve(objeto):reject('No se encontró el objeto con id: '+id)
            })
    }
   buscarDatoIdProm(1)
   .then((objeto)=>console.log(objeto))//si se resolvió la promesa
   .catch((error)=>console.log(error))