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
            <label>
                Psicólogo:
                <input type="text" name="nomPsicologo" onChange={handleNomPsicologo} />
            </label>
            &nbsp; &nbsp;
            <label>
                Ap1:
                <input type="text" name="ap1Psicologo" onChange={handleAp1Psicologo} />
            </label>
            &nbsp; &nbsp;
            <label>
                Ap2:
                <input type="text" name="ap2Psicologo" onChange={handleAp2Psicologo} />
            </label>
            &nbsp; &nbsp;
            <label>
                Edad:
                <input type="text" name="edadPsicologo" onChange={handleEdadPsicologo} />
            </label>
            &nbsp; &nbsp;
            <label>
                Sexo:
                <input type="text" name="sexoPsicologo" onChange={handleSexoPsicologo} />
            </label>
            &nbsp; &nbsp;
            <label>
                Especialidad:
                <input type="text" name="especialidad" onChange={handleEspecialidad} />
            </label>
            &nbsp; &nbsp; &nbsp;
            <button onClick={handleSubmit}> Ingresar </button>
        </Content>
    );
};

export default PsicologosAdd;
