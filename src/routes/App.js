import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Login from "../view/Login";
import Pacientes from "../view/Pacientes/Pacientes";
import PacientesAdd from "../view/Pacientes/PacientesAdd";
import PacientesEdit from "../view/Pacientes/PacientesEdit";
import Psicologos from "../view/Psicologos/Psicologos";
import PsicologosAdd from "../view/Psicologos/PsicologosAdd";
import PsicologosEdit from "../view/Psicologos/PsicologosEdit";
import Calendario from "../view/Calendario/Calendario";
import Agenda from "../view/Agenda/Agenda";
import AgendaAdd from "../view/Agenda/AgendaAdd";
import AgendaEdit from "../view/Agenda/AgendaEdit";
import Expedientes from "../view/Expedientes/Expedientes";
import ExpedientesAdd from "../view/Expedientes/ExpedientesAdd";
import ExpedientesEdit from "../view/Expedientes/ExpedientesEdit";
import ExpedientesVistas from "../view/Expedientes/ExpedientesVista";
import ExpedientesConsulta from "../view/Expedientes/ExpedientesConsulta";
import PacientesAgenda from "../view/Pacientes/Pacientes_Agenda";
import AgendaPacientes from "../view/Agenda/AgendaPaciente_Add";
import "../styles/App.css";
import PacientesAgendaEditar from "../view/Pacientes/Pacientes_Agenda_Edit";
import PacientesAdd_Home from "../view/Pacientes/PacientesAdd_Home";
import PacientesPsicologo from "../view/Pacientes/Pacientes_Psicologo";
import PacientesPsicologoEditar from "../view/Pacientes/Pacientes_Psicologo_Edit";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          {/* Psicologo */}
          <Route path="/pacientes-psicologo/:id" element={<PacientesPsicologo />}></Route>
          <Route path="/pacientes-psicologo-edit/:id" element={<PacientesPsicologoEditar />}></Route>
          <Route path="/expedientes-consulta/:id" element={<ExpedientesConsulta />}></Route>

          {/* Paciente */}
          <Route path="/pacientes/:id" element={<Pacientes />}></Route>
          <Route path="/pacientes-edit/:id" element={<PacientesEdit />}></Route>
          <Route path="/pacientes-add/:id" element={<PacientesAdd />}></Route>
          <Route path="/pacientes-addHome" element={<PacientesAdd_Home />}></Route>
          <Route path="/pacientes-agenda/:id" element={<PacientesAgenda />}></Route>
          <Route path="/pacientes-agenda-edit/:id" element={<PacientesAgendaEditar />}></Route>
          <Route path="/agenda-pacientes/:id" element={<AgendaPacientes />}></Route>
          
          {/* Login */}
          <Route path="/login" element={<Login />}></Route>
          
          {/*Cuando se lea el link /pacientes-add, llamar a PacientesAdd */}
          {/*PacientesAdd esta en el href de Pacientes.js*/}
          <Route path="/psicologos" element={<Psicologos />}></Route>
          <Route path="/psicologos-edit" element={<PsicologosEdit />}></Route>
          <Route path="/psicologos-add" element={<PsicologosAdd />}></Route>

          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/agenda-add" element={<AgendaAdd />}></Route>
          <Route path="/agenda-edit/:id" element={<AgendaEdit />}></Route>
          {/*<Route path="/expedientes" element={<Expedientes />}></Route>*/}
          <Route path="/expedientes" element={<ExpedientesVistas />}></Route>
          <Route path="/expedientes-add" element={<ExpedientesAdd />}></Route>
          <Route path="/expedientes-edit/:id" element={<ExpedientesEdit />}></Route>
          <Route path="/calendario" element={<Calendario />}></Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;