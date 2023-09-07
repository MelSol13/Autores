import { Routes, Route } from "react-router-dom";
import TodosAutores from "./componentes/TodosAutores";
import NuevoAutor from "./componentes/NuevoAutor";

const App = ()=> {
  return(
    <div>
      <h1>Autores</h1>
      <Routes>
        <Route path="/" exact element={<TodosAutores/>}/>
        <Route path="/nuevo" element={<NuevoAutor/>}/>
      </Routes>
    </div>
  )
}

export default App;
