import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HandymanIcon from '@mui/icons-material/Handyman';
//import "../../styles/Tablas.css";
//import "../../styles/RegistroEstilos.css";
import SaveIcon from '@mui/icons-material/Save';
import Axios from 'axios';

const Mantenimientos = () => {
  const [filtroInvernadero, setFiltroInvernadero] = useState('');
  const [mantenimientos, setMantenimientos] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [invernaderos, setInvernaderos] = useState([]);
  const [selectedMantenimiento, setSelectedMantenimiento] = useState({
    idMantenimiento: 0,
    idInvernadero: 0,
    concepto: "",
    descripcion: "",
    tipoMantenimiento: "",
    fechaMantenimiento: "",
    estadoMantenimiento: "",
  });

  const handleFiltroInvernadero = (e) => {
    setFiltroInvernadero(e.target.value);
  }

  const cargarMantenimientos = async () => {
    try {
      const response = await Axios.get('http://[::1]:3000/mantenimientos');
      setMantenimientos(response.data);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  };

  useEffect(() => {
    cargarMantenimientos();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://[::1]:3000/invernaderos');
        console.log('Datos recibidos por GET:', response.data);
        setInvernaderos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);

  const handleEditar = (mantenimiento) => {
    setSelectedMantenimiento(mantenimiento);
    setModoEdicion(true);
  };

  const handleEliminar = async (id) => {
    try {
      await Axios.delete(`http://[::1]:3000/mantenimientos/${id}`);
      alert(`Mantenimiento con ID ${id} eliminado`);
      cargarMantenimientos();
    } catch (error) {
      console.error(`Error al eliminar el Mantenimiento con ID ${id}:`, error);
      alert(`Error al eliminar el Mantenimiento con ID ${id}`);
    }
  };

  const handleActualizar = async () => {
    try {
      const { idMantenimiento, idInvernadero, concepto, descripcion, tipoMantenimiento, fechaMantenimiento, estadoMantenimiento } = selectedMantenimiento;

      if (
        concepto.trim() === '' ||
        descripcion.trim() === '' ||
        tipoMantenimiento.trim() === '' ||
        idInvernadero === 0 ||
        fechaMantenimiento.trim() === '' ||
        estadoMantenimiento.trim() === ''
      ) {
        alert('Por favor completa todos los campos.');
        return;
      }

      const datosActualizados = {
        idInvernadero: parseInt(idInvernadero),
        concepto,
        descripcion,
        tipoMantenimiento,
        fechaMantenimiento,
        estadoMantenimiento,
      };
    

      await Axios.put(`http://[::1]:3000/mantenimientos/${idMantenimiento}`, datosActualizados);

      alert(`Mantenimiento actualizado: ${idMantenimiento}`);
      setModoEdicion(false);
      cargarMantenimientos();
    } catch (error) {
      console.error('Error al actualizar el mantenimiento:', error);
      alert('Error al actualizar el mantenimiento. Por favor revisa los datos.');
    }
  };

  const handleInputChange = (campo, valor) => {
    setSelectedMantenimiento(prevState => ({
      ...prevState,
      [campo]: valor
    }));
  };

  const mantenimientosFiltrados = mantenimientos.filter(mantenimiento => {
    if (!filtroInvernadero) {
      return true;
    }
    return mantenimiento.idInvernadero === parseInt(filtroInvernadero, 10);
  });

  return (
    <Content>
      <h1>MANTENIMIENTOS</h1>
            <div className="filtro-invernadero" style={{ float: 'right', marginRight: '10px' }}>
        <label htmlFor="invernadero">Filtro por Invernadero:</label>
        <select
          id="invernadero"
          value={filtroInvernadero}
          onChange={handleFiltroInvernadero}
          style={{ width: '200px', padding: '5px' }}
        >
          <option value="">Todos</option>
          {invernaderos.map(invernadero => (
            <option key={invernadero.idInvernadero} value={invernadero.idInvernadero}>
              {invernadero.nombre}
            </option>
          ))}
        </select>
      </div>

      <a href="/mantenimientos-add">
        <Button variant="contained" color="success" startIcon={<HandymanIcon />}>
          Agregar Mantenimientos
        </Button>
      </a>
      <div>
        {modoEdicion ? (
          <div className="registro-container">
            <form className="registro-form">
              <div className="form-group">
                <label>ID Mantenimiento:</label>
                <input
                  type="number"
                  value={selectedMantenimiento.idMantenimiento}
                  readOnly
                  style={{ color: 'gray' }}
                />
              </div>
              <div className="form-group">
                <label>ID Invernadero:</label>
                <select
                      value={selectedMantenimiento.idInvernadero}
                      readOnly={!modoEdicion}
                      onChange={(e) => handleInputChange('idInvernadero', e.target.value)}
                      className="Puesto"
                    >
                      {invernaderos.map(invernadero => (
                        <option key={invernadero.idInvernadero} value={invernadero.idInvernadero}>
                          {invernadero.nombre}
                        </option>
                      ))}
                    </select>
              </div>
              <div className="form-group">
                <label>Concepto:</label>
                <input
                  type="text"
                  value={selectedMantenimiento.concepto}
                  readOnly={!modoEdicion}
                  onChange={(e) => handleInputChange('concepto', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Descripción:</label>
                <input
                  type="text"
                  value={selectedMantenimiento.descripcion}
                  readOnly={!modoEdicion}
                  onChange={(e) => handleInputChange('descripcion', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Tipo de Mantenimiento:</label>
                <input
                  type="text"
                  value={selectedMantenimiento.tipoMantenimiento}
                  readOnly={!modoEdicion}
                  onChange={(e) => handleInputChange('tipoMantenimiento', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Fecha de Mantenimiento:</label>
                <input
                  type="date"
                  value={selectedMantenimiento.fechaMantenimiento}
                  readOnly={!modoEdicion}
                  onChange={(e) => handleInputChange('fechaMantenimiento', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Estado de Mantenimiento:</label>
                <input
                  type="text"
                  value={selectedMantenimiento.estadoMantenimiento}
                  readOnly={!modoEdicion}
                  onChange={(e) => handleInputChange('estadoMantenimiento', e.target.value)}
                />
              </div>
              {modoEdicion && (
                <Button type="button" variant="contained" color="success" startIcon={<SaveIcon />} onClick={handleActualizar}>
                  Actualizar
                </Button>
              )}
            </form>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID Mantenimiento</th>
                <th>ID Invernadero</th>
                <th>Concepto</th>
                <th>Descripción</th>
                <th>Tipo de Mantenimiento</th>
                <th>Fecha de Mantenimiento</th>
                <th>Estado de Mantenimiento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
            {mantenimientosFiltrados.map(mantenimiento => (
                <tr key={mantenimiento.idMantenimiento}>
                  <td>{mantenimiento.idMantenimiento}</td>
                  <td>{mantenimiento.idInvernadero} - {invernaderos.find(invernadero => invernadero.idInvernadero === mantenimiento.idInvernadero)?.nombre || 'Desconocido'}</td>
                  <td>{mantenimiento.concepto}</td>
                  <td>{mantenimiento.descripcion}</td>
                  <td>{mantenimiento.tipoMantenimiento}</td>
                  <td>{mantenimiento.fechaMantenimiento}</td>
                  <td>{mantenimiento.estadoMantenimiento}</td>
                  <td>
                    <Button style={{ width: '120px' }} variant="contained" color="success" startIcon={<EditIcon />} onClick={() => handleEditar(mantenimiento)}>
                      Editar
                    </Button>
                    <td></td>
                    <Button style={{ width: '120px' }} variant="contained" color="success" startIcon={<DeleteIcon />} onClick={() => handleEliminar(mantenimiento.idMantenimiento)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Content>
  );
};

export default Mantenimientos;