import axios from "axios";

const PACIENTE_API_BASE_URL = "http://localhost:4002/pacientes";

class PacienteService {
  getPaciente() {
    return axios.get(PACIENTE_API_BASE_URL);
  }
  createPaciente(paciente) {
    return axios.post(PACIENTE_API_BASE_URL, paciente);
  }
  getPacienteById(idPaciente) {
    return axios.get(PACIENTE_API_BASE_URL + "/" + idPaciente);
  }
  updatePaciente(paciente, idPaciente) {
    return axios.put(PACIENTE_API_BASE_URL + "/" + idPaciente, paciente);
  }
  deletePaciente(idPaciente) {
    return axios.delete(PACIENTE_API_BASE_URL + "/" + idPaciente);
  }
}
export default new PacienteService();