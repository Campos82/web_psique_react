import React, { useState } from "react";
import Content from "../../components/Content";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PsicologosAdd = () => {
    const [nomPsicologo, setNomPsicologo] = useState("");
    const [ap1Psicologo, setAp1Psicologo] = useState("");
    const [ap2Psicologo, setAp2Psicologo] = useState("");
    const [edadPsicologo, setEdadPsicologo] = useState("");
    const [sexoPsicologo, setSexoPsicologo] = useState("");
    const [especialidad, setEspecialidad] = useState("");

    const navigate = useNavigate();

    const handleNomPsicologo = (event) => {
        setNomPsicologo(event.target.value);
    };
    const handleAp1Psicologo = (event) => {
        setAp1Psicologo(event.target.value);
    };
    const handleAp2Psicologo = (event) => {
        setAp2Psicologo(event.target.value);
    };
    const handleEdadPsicologo = (event) => {
        setEdadPsicologo(event.target.value);
    };
    const handleSexoPsicologo = (event) => {
        setSexoPsicologo(event.target.value);
    };
    const handleEspecialidad = (event) => {
        setEspecialidad(event.target.value);
    };
    const Cancelar = () => {
        navigate("/pacientes");
      };
    
    const handleSubmit = async () => {
        let psicologo = {
            nomPsicolgo: nomPsicologo,
            ap1Psicolgo: ap1Psicologo,
            ap2Psicolgo: ap2Psicologo,
            edadPsicolgo: edadPsicologo,
            sexoPsicolgo: sexoPsicologo,
            especialidad: especialidad
        };

        try {
            const response = await axios.post('http://localhost:4002/psicologos', psicologo);
            console.log(response.data);
            navigate('/psicologos');
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return (
        <Content>
            <h1>CAPTURA DE PSICÓLOGO</h1>
            <center>
                <table class="wrapper">
                    <tr>
                        <td>
                            <label class="textoCaja">
                                Psicólogo:
                                <input type="text" class="redondeado" name="nomPsicologo" onChange={handleNomPsicologo} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label class="textoCaja">
                                Ap1:
                                <input type="text" class="redondeado" name="ap1Psicologo" onChange={handleAp1Psicologo} />
                            </label>
                        </td>
                        <td>
                            <label class="textoCaja">
                                Ap2:
                                <input type="text" class="redondeado" name="ap2Psicologo" onChange={handleAp2Psicologo} />
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
                                <input type="text" class="redondeado" name="edadPsicologo" onChange={handleEdadPsicologo} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label class="textoCaja">
                                Sexo:
                                <input type="text" class="redondeado" name="sexoPsicologo" onChange={handleSexoPsicologo} />
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
                                Especialidad:
                                <input type="text" class="redondeado" name="especialidad" onChange={handleEspecialidad} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button class="estiloBoton" onClick={handleSubmit}> Ingresar </button>
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

export default PsicologosAdd;
