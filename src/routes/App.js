import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Login from "../view/Login";
import Pacientes from "../view/Pacientes/Pacientes";
import PacientesAdd from "../view/Pacientes/PacientesAdd";
import Registrar_cita from "../view/Pacientes/Registrar_cita";
import Modificar_cita from "../view/Pacientes/Modificar_cita";
import Cancelar_cita from "../view/Pacientes/Cancelar_cita";
import Psicologos from "../view/Psicologos/Psicologos";
import PsicologosAdd from "../view/Psicologos/PsicologosAdd";
import Psicologos_histCli from "../view/Psicologos/Psicologos_histCli";
import Psicologos_pendientes from "../view/Psicologos/Psicologos_pendientes";
import Psicologos_seguimiento from "../view/Psicologos/Psicologos_seguimiento";
import Agenda from "../view/Agenda/Agenda";
import AgendaAdd from "../view/Agenda/AgendaAdd";
import Expedientes from "../view/Expedientes/Expedientes";
import ExpedientesAdd from "../view/Expedientes/ExpedientesAdd";
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
          <Route path="/registrar-cita" element={<Registrar_cita />}></Route>
          <Route path="/modificar-cita" element={<Modificar_cita />}></Route>
          <Route path="/cancelar-cita" element={<Cancelar_cita />}></Route>
          <Route path="/psico-histCli" element={<Psicologos_histCli />}></Route>
          <Route path="/psico-pendientes" element={<Psicologos_pendientes />}></Route>
          <Route path="/psico-seguimiento" element={<Psicologos_seguimiento />}></Route>
          <Route path="/psicologos" element={<Psicologos />}></Route>
          <Route path="/psicologos-add" element={<PsicologosAdd />}></Route>
          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/agenda-add" element={<AgendaAdd />}></Route>
          <Route path="/expedientes" element={<Expedientes />}></Route>
          <Route path="/expedientes-add" element={<ExpedientesAdd />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;