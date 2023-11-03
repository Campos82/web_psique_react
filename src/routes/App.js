import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Login from "../view/Login";
import Pacientes from "../view/Pacientes/Pacientes";
import PacientesAdd from "../view/Pacientes/PacientesAdd";
import PacientesEdit from "../view/Pacientes/PacientesEdit";
import Psicologos from "../view/Psicologos/Psicologos";
import PsicologosAdd from "../view/Psicologos/PsicologosAdd";
import PsicologosEdit from "../view/Psicologos/PsicologosEdit";
import Agenda from "../view/Agenda/Agenda";
import AgendaAdd from "../view/Agenda/AgendaAdd";
import Expedientes from "../view/Expedientes/Expedientes";
import ExpedientesAdd from "../view/Expedientes/ExpedientesAdd";
import ExpedientesEdit from "../view/Expedientes/ExpedientesEdit";
import Layout from "../containers/Layout";
import "../styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pacientes" element={<Pacientes />}></Route>
          <Route path="/pacientes-add" element={<PacientesAdd />}></Route>
          {/*Cuando se lea el link /pacientes-add, llamar a PacientesAdd */}
          {/*PacientesAdd esta en el href de Pacientes.js*/}
          <Route path="/pacientes-edit/:id" element={<PacientesEdit />}></Route>

          <Route path="/psicologos" element={<Psicologos />}></Route>
          <Route path="/psicologos-edit/:id" element={<PsicologosEdit />}></Route>
          <Route path="/psicologos-add" element={<PsicologosAdd />}></Route>

          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/agenda-add" element={<AgendaAdd />}></Route>

          <Route path="/expedientes" element={<Expedientes />}></Route>
          <Route path="/expedientes-add" element={<ExpedientesAdd />}></Route>
          <Route path="/expedientes-edit/:id" element={<ExpedientesEdit />}></Route>
          
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;