const datos = [
    {
        "id":1,
        "nombre": "Juan",
        "apellido": "Perez"
    },
    {
        "id":2,
        "nombre": "Andres",
        "apellido": "Gomez"
    },
    {
        "id":3,
        "nombre": "Joaquin",
        "apellido": "Olivo"
    },
]


// Funcion que recibe otra funcion como parametros

const buscarDatoID = (id,callback) =>{

    const objeto =datos.find(item => item.id == id)
    if (objeto) {
        callback(null,objeto)
        
    }else{
        callback("No se encontro el objeto con id igual a", id)
    }

}

buscarDatoID(2,(error, objeto)=>{
    if (error) {
        return console.log(error);
        
    }
    console.log(objeto);
})

//asincrono
let texto='Hola asincrono'
setTimeout(()=>{console.log("bienvenido")},3000)
setTimeout(function(){mifuncion(texto),2000})

const mifuncion=(msj)=>console.log(msj)
//setinterval
setInterval(mifuncion2,1000)
function mifuncion2(){
    let d= new Date()
    document.getElementById("reloj").innerHTML=(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
}