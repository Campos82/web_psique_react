import axios from "axios";

const USUARIO_API_BASE_URL = "http://localhost:4002/usuarios";

class UsuarioService {
  getUsuario() {
    return axios.get(USUARIO_API_BASE_URL);
  }
  createUsuario(usuario) {
    return axios.post(USUARIO_API_BASE_URL, usuario);
  }
  getUsuarioById(idUsuario) {
    return axios.get(USUARIO_API_BASE_URL + "/" + idUsuario);
  }
  updateUsuario(usuario, idUsuario) {
    return axios.put(USUARIO_API_BASE_URL + "/" + idUsuario, usuario);
  }
  deleteUsuario(idUsuario) {
    return axios.delete(USUARIO_API_BASE_URL + "/" + idUsuario);
  }
  async getLogin(correo, contrasena) {
    try {
      const response = await axios.get(`${USUARIO_API_BASE_URL}?filter[where][correo]=${correo}&filter[where][contrasena]=${contrasena}`);
      const user = response.data;
      return user;
    } catch (error) {
      console.error(error);
    }
  }
  async getUltimoUsuario() {
    const response = await axios.get(USUARIO_API_BASE_URL)
    const usuarios = response.data;
    const ultimoUsuario = usuarios.slice(-1)[0];
    console.log(ultimoUsuario);
    return ultimoUsuario;
  }
}
export default new UsuarioService();