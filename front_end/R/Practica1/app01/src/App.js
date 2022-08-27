
import React from "react";
import Compclase from "./components/Compclase";
import Compfunction from "./components/Compfunction";
import Estados from "./components/Estados";
import Eventos from "./components/Eventos";
import Variables from "./components/Variables";
import Contador from "./components/Contador";
import Listas from "./components/Listas";
import Formulario from "./components/Formulario";

const elemento = <p>Desarrollo web</p>
const title = "Front End"
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Formulario></Formulario>
          </div>
          <div className ="col-12">
            <h1 className ="text-center">Hola mundo</h1>
            {elemento}
            <div className="text-center">{title}</div>
            <Compclase></Compclase>
            <Compfunction></Compfunction>
            <Variables></Variables>
            <Eventos></Eventos>
            <Estados></Estados>
            <Contador></Contador>
            <Listas></Listas>
            
            


          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
