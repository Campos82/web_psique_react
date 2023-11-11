import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";

const PsicologoEdit = () => {
  const { id } = useParams();
  const [nomPsicolgo, setNomPsicologo] = useState("");  {/* nomPsicolgo, asi esta en el loopback */}
  const [ap1Psicolgo, setAp1Psicologo] = useState("");
  const [ap2Psicolgo, setAp2Psicologo] = useState("");
  const [edadPsicolgo, setEdadPsicologo] = useState("");
  const [sexoPsicolgo, setSexoPsicologo] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4002/psicologos/${id}`);
        const data = response.data;
        setNomPsicologo(data.nomPsicolgo);  {/* nomPsicolgo, aqui recibe los datos desde el loopback */}
        setAp1Psicologo(data.ap1Psicolgo);
        setAp2Psicologo(data.ap2Psicolgo);
        setEdadPsicologo(data.edadPsicolgo);
        setSexoPsicologo(data.sexoPsicolgo);
        setEspecialidad(data.especialidad);
      } catch (error) {
        console.error("Error al obtener el psicólogo:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleNomPsicolgo = (event) => {
    setNomPsicologo(event.target.value);
  };

  const handleAp1Psicolgo = (event) => {
    setAp1Psicologo(event.target.value);
  };

  const handleAp2Psicolgo = (event) => {
    setAp2Psicologo(event.target.value);
  };

  const handleEdadPsicolgo = (event) => {
    setEdadPsicologo(event.target.value);
  };

  const handleSexoPsicolgo = (event) => {
    setSexoPsicologo(event.target.value);
  };

  const handleEspecialidad = (event) => {
    setEspecialidad(event.target.value);
  };
  const Cancelar = () => {
    navigate("/psicologos");
  };

  const handleSubmit = async () => {
    const psicologo = {
      nomPsicolgo,
      ap1Psicolgo,
      ap2Psicolgo,
      edadPsicolgo,
      sexoPsicolgo,
      especialidad,
    };

    try {
      await axios.put(`http://localhost:4002/psicologos/${id}`, psicologo);
      navigate("/psicologos");
    } catch (error) {
      console.error("Error al actualizar el psicólogo:", error);
    }
  };

  /* value=() recibe el dato que va a presentar en campo de texto */
  return (
    <Content>
      <h1>EDITAR PSICOLOGO</h1>

      <center>
        <table class="wrapper">
          <tr>
            <td>
              <label class="textoCaja">
                Nombre:
                <input type="text" class="redondeado" value={nomPsicolgo} onChange={handleNomPsicolgo} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>
              <label class="textoCaja">
                Ap1:
                <input type="text" class="redondeado" value={ap1Psicolgo} onChange={handleAp1Psicolgo} />
              </label>
            </td>
            <td>
              <label class="textoCaja">
                Ap2:
                <input type="text" class="redondeado" value={ap2Psicolgo} onChange={handleAp2Psicolgo} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>
              <label class="textoCaja">
                Edad:
                <input type="text" class="redondeado" value={edadPsicolgo} onChange={handleEdadPsicolgo} />
              </label>
            </td>
            <td>
              <label class="textoCaja">
                Sexo:
                <input type="text" class="redondeado" value={sexoPsicolgo} onChange={handleSexoPsicolgo} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label class="textoCaja">
                Especialidad:
                <input type="text" class="redondeado" value={especialidad} onChange={handleEspecialidad} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>
              <button class="estiloBoton" onClick={handleSubmit}>Actualizar</button>
            </td>
            <td>
              <button class="estiloBoton" onClick={Cancelar}> Cancelar </button>
            </td>
          </tr>
        </table>
      </center>
    </Content>
  );
};

export default PsicologoEdit;