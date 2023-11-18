import axios from "axios";

const PACIENTE_API_BASE_URL = "http://localhost:4002/pacientes";

class PacienteService {
  
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
  async getPaciente(idUsuario){
    try {
       const response = await axios.get(`${PACIENTE_API_BASE_URL}?filter[where][idUsuario]=${idUsuario}`);
       const paciente = response.data;
       return paciente;
     } catch (error) {
       console.error(error);
     }
   }
   async getAgendas(idPsicologo) {

    const response = await axios.get(`${PACIENTE_API_BASE_URL}?filter=` + JSON.stringify({
      "where": {
        "idPsicologo": idPsicologo
      },
    }));
    const pacientes = response.data;
    const pacientesIds = pacientes.map((paciente) => paciente.idPaciente);
    const urlAgendas = `http://localhost:4002/agenda?filter=` + JSON.stringify({
    "where": {
      "idPaciente": { "inq": pacientesIds }
    },
    "include": [
      {
        "relation": "agenda_pacientes",
        "scope": {
          "include": [
            {
              "relation": "pacientes_usuarios"
            }
          ]
        }
      },
    ]
  });
    const responseAgendas = await axios.get(urlAgendas);
  const agendasInfo = responseAgendas.data;
  
    return agendasInfo;
  }

  async getExpedientes(idPsicologo) {

    const response = await axios.get(`${PACIENTE_API_BASE_URL}?filter=` + JSON.stringify({
      "where": {
        "idPsicologo": idPsicologo
      },
    }));
    const pacientes = response.data;
    const pacientesIds = pacientes.map((paciente) => paciente.idPaciente);
    const urlExpedientes = `http://localhost:4002/expedientes?filter=` + JSON.stringify({
    "where": {
      "idPaciente": { "inq": pacientesIds }
    },
    "include": [
      {
        "relation": "expediente_pacientes",
        "scope": {
          "include": [
            {
              "relation": "pacientes_usuarios"
            }
          ]
        }
      },
    ]
  });
    const responseExpedientes = await axios.get(urlExpedientes);
  const expedientesInfo = responseExpedientes.data;
  
    return expedientesInfo;
  }
}
export default new PacienteService();