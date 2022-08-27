
/* fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>res.json())
.then((datos)=>{console.log(datos)
 datos.map((elemento)=>console.log('Id: '+elemento.id+' '+elemento.title))
})
.catch((e)=>console.log(e))


////////////////async -await////////////////////////
const buscarDato = async() => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const data = await res.json()
        data.forEach(x => {
            console.log(console.log('Id--------------: '+x.id+' '+x.title));
        });
    } catch (error) {
        console.log(error);
    }

   
}

buscarDato() */


const BuscarDatoID = async(id)=>{
    try {
        const res =await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await res.json()
        console.log("El titulo del usuario "+id+" es : ",data.title);
    } catch (error) {
        console.log(error);
    }
}

BuscarDatoID(20)