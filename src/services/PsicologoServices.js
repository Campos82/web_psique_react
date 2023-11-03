import axios from "axios";

const PSICOLOGO_API_BASE_URL = "http://localhost:4002/psicologos";

class PsicologoService {
  getPsicologo() {
    return axios.get(PSICOLOGO_API_BASE_URL);
  }
  createPsicologo(psicologo) {
    return axios.post(PSICOLOGO_API_BASE_URL, psicologo);
  }
  getPsicologoById(idPsicologo) {
    return axios.get(PSICOLOGO_API_BASE_URL + "/" + idPsicologo);
  }
  updatePsicologo(psicologo, idPsicolgo) {
    return axios.put(PSICOLOGO_API_BASE_URL + "/" + idPsicolgo, psicologo);
  }
  deletePsicologo(idPsicolgo) {
    return axios.delete(PSICOLOGO_API_BASE_URL + "/" + idPsicolgo);
  }
}
export default new PsicologoService();