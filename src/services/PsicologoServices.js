import axios from "axios";

const PSICOLOGO_API_BASE_URL = "http://localhost:4002/psicologos";

class PsicologoService {
  
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
  async getPsicologos() {
    const response = await axios.get(PSICOLOGO_API_BASE_URL);
    const psicologos= response.data;
    console.log(psicologos);
    return psicologos;
  }
  async getPsicologo(idUsuario){
    try {
       const response = await axios.get(`${PSICOLOGO_API_BASE_URL}?filter[where][idUsuario]=${idUsuario}`);
       const psicologo = response.data;
       return psicologo;
     } catch (error) {
       console.error(error);
     }
   }
}
export default new PsicologoService();