

document.getElementById("calcular").addEventListener("click", () =>{
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    num1 = parseInt(num1)
    num2 =parseInt(num2)
    let option = document.getElementById("option").value

     switch(option){
        case "Suma":
            document.getElementById("resultado").innerHTML = num1 + num2
            num1 = document.getElementById("num1").value = ""
            num1 = document.getElementById("num2").value = ""
            break
        
        case "Resta":
            document.getElementById("resultado").innerHTML = num1 - num2
            num1 = document.getElementById("num1").value = ""
            num1 = document.getElementById("num2").value = ""
            break
        
         case "Multiplicacion":
            document.getElementById("resultado").innerHTML = num1 * num2
            num1 = document.getElementById("num1").value = ""
            num1 = document.getElementById("num2").value = ""
            break
        
         case "Division":
            document.getElementById("resultado").innerHTML = num1 / num2
            num1 = document.getElementById("num1").value = ""
            num1 = document.getElementById("num2").value = ""
            break
     }
})