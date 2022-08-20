console.log("Vectores")

const vector = ["Manzana", "Papaya", "Mango"]
const vector2= []
vector2[0] = "futbol"
vector2[1] = "Baseball"
vector2[2] = "Basketball"

console.log(vector);
console.log(vector2);

const vector3 = new Array("accion", "humor", "drama")
console.log(vector3);


console.log("Metodos");
 //agregar fianl
vector3.push("Comedia")
console.log(vector3);

//Eliminar final
vector3.pop()
console.log(vector3);

//Agregar Al comienzo
vector3.unshift("Comedia")
console.log(vector3);

//eliminar Al comienzo
vector3.shift()
console.log(vector3);


//objetos
function Mascota(Nombre, Tipo, edad) {
    this.Nombre = Nombre
    this.Tipo = Tipo
    this.Edad = edad
 
}

const User = {
    Nombre: "Joaquin",
    Apellido: "Olivo",
    Ubicacion:{
        pais: "Colombia",
        ciudad: "Barranquilla"
    },
    asignatura:["Web", "Movil", "Algoritmos"],
    msj(){
       return "Bienvenido "+this.Nombre+" "
    }
}

console.log("Pais:",User.Ubicacion.pais);
console.log(User.msj());

//funciones declarativas

function Sumar() {
    console.log(10+6);
}
Sumar()

//function retorna
function sum2() {
    return 10+20
    
}
let suma = sum2()
console.log(suma);

//function que retorna otra funcion

function mensaje(params) {
    return function(){
        return "Hola mundo"
    }
}

console.log(mensaje()());

//funciones con parametros
function sumar3(num1, num2) {
    console.log(num1 + num2);
    
}
sumar3(10,20)
//parametros por defectos
function sumar3(num1 = 0, num2 = 1) {
    console.log(num1 + num2);
    
}
sumar3(5)


// arrow function
const sumarf = (num1, num2) =>{
    console.log(num1+num2);
}
sumarf(5,9)
const numeros = (num1,num2) =>(`La suma de los numeros es ${num1+num2}`)

console.log(numeros(10,23));