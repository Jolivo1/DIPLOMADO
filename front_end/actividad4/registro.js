let tabla =[
    {nombre: "Juan", Apellido:"Lopez", edad: 12, direccion: "calle 3"},
    {nombre: "Maria", Apellido:"Martinez", edad: 34, direccion: "calle 19"},
    {nombre: "Pedro", Apellido:"Perez", edad: 29, direccion: "calle 12"},
]

document.getElementById("listar").addEventListener("click", () =>{ 
    tabla.forEach(x => {
        document.getElementById("tabla").innerHTML += `<tr><td class="text-center">${x.nombre}</th> <td class="text-center">${x.Apellido}</td> <td class="text-center">${x.edad}</td> <td class="text-center">${x.direccion}</td> </tr>`
    });

})


function registrar() {
    let userNombre = document.getElementById("nombre").value
    let userApellido = document.getElementById("apellido").value
    let userEdad = document.getElementById("edad").value
    let userDireccion = document.getElementById("direccion").value

   
    document.getElementById("tabla").innerHTML += `<tr><td class="text-center">${userNombre}</th> <td class="text-center">${userApellido}</td> <td class="text-center">${userEdad}</td> <td class="text-center">${userDireccion}</td> </tr>`
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("direccion").value = ""

    tabla.push({nombre: userNombre,Apellido: userApellido,edad: userEdad,direccion: userDireccion})
    console.log(tabla);
}


document.getElementById("registrar").addEventListener("click", () =>{ 
    
    let userNombre = document.getElementById("nombre").value
    let userApellido = document.getElementById("apellido").value
    let userEdad = document.getElementById("edad").value
    let userDireccion = document.getElementById("direccion").value
    
   
    if (userNombre  == "" || userApellido  == "" || userDireccion  == "" || userEdad  == "") {
        alert("Ingresar todos los campos")
    }else{
        registrar()
    }
})


console.log(tabla);
