import axios from "axios";

const AGENDA_API_BASE_URL = "http://localhost:4002/agenda";

class AgendaService {
  getAgenda() {
    return axios.get(AGENDA_API_BASE_URL);
  }
  createAgenda(agenda) {
    return axios.post(AGENDA_API_BASE_URL, agenda);
  }
  getAgendaById(idAgenda) {
    return axios.get(AGENDA_API_BASE_URL + "/" + idAgenda);
  }
  updateAgenda(agenda, idAgenda) {
    return axios.put(AGENDA_API_BASE_URL + "/" + idAgenda, agenda);
  }
  deleteAgenda(idAgenda) {
    return axios.delete(AGENDA_API_BASE_URL + "/" + idAgenda);
  }
}
export default new AgendaService();