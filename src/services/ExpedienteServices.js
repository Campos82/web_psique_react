import axios from "axios";

const EXPEDIENTE_API_BASE_URL = "http://localhost:4002/expedientes";

class ExpedienteService {
  getExpediente() {
    return axios.get(EXPEDIENTE_API_BASE_URL);
  }
  createExpediente(expediente) {
    return axios.post(EXPEDIENTE_API_BASE_URL, expediente);
  }
  getExpedienteById(idExpediente) {
    return axios.get(EXPEDIENTE_API_BASE_URL + "/" + idExpediente);
  }
  updateExpediente(expediente, idExpediente) {
    return axios.put(EXPEDIENTE_API_BASE_URL + "/" + idExpediente, expediente);
  }
  deleteExpediente(idExpediente) {
    return axios.delete(EXPEDIENTE_API_BASE_URL + "/" + idExpediente);
  }
}
export default new ExpedienteService();