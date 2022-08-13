
document.getElementById("btn").addEventListener("click", ()=>{
    document.getElementById("demo").innerHTML = "hola mundo"
    document.getElementById("demo").classList.toggle("bcc");
    document.getElementById("demo").style.fontSize = '40px'

})

document.getElementById("imprimir").addEventListener("click", () =>{
    window.print()
})

document.getElementById("hide").addEventListener("click", () =>{
    document.getElementById("img").style.display = 'none'
})
document.getElementById("show").addEventListener("click", () =>{
    document.getElementById("img").style.display = ''
})

var num1 = 20
let num2 = 10
const msj = "hola"
document.write( num1,"<br>")
document.write( num2,"<br>")
if (num1 == num2){
    document.write("Los numeros son iguales <br>")
}else {
    document.write("Los NO numeros son iguales <br>")
}
let dia = parseInt(prompt("Ingrese un numero <br>"))

switch(dia){
    case 1: 
     document.write("lunes <br>")
    break;
     case 2:  
    document.write("Martes <br>")
    break;
     case 3:  
    document.write("Miercoles <br>")
     break;
    case 4: 
     document.write("Jueves <br>")
    break;
    case 5: 
     document.write("Viernes <br>")
    break;
    case 6:  
     document.write("Sabado <br>")
    break;
    case 7:  
     document.write("Dominfo <br>")
    break;
    default: 
    document.write("son los numeros del 1 al 7 <br>")
    
}
for (let i = 0; i <= 10 ; i++) {
    document.write(dia + "X "+i+" = "+dia*i+" <br><br>")
}

const vector = ["ITEM 1","ITEM 2","ITEM 3"]
vector.forEach(x => {
    document.write(x)
});