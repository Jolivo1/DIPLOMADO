import React from "react";

import inicio from "./componentes/inicio";
import contacto from "./componentes/contacto"
import quienesSomos from "./componentes/quienesSomos"
import {BrowserRouter as Router,
Routes,
Route,
Link} from 'react-router-dom'
 
function App() {
  return (
    <Router>
    <div className="container">
      <h1>Hola mundo</h1>
      <h2>navegacion</h2>
      <hr/>
      <Routes>
        <Route path="/" element={<inicio/>} />
        <Route path="contacto" element={<contacto/>} />
        <Route path="quienessomos" element={<quienesSomos/>} />
      </Routes>
    </div>
    </Router>
  );
}
 
export default App;