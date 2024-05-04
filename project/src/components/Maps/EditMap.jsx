import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-use-history';

const EditMap = () => {
  const { id } = useParams();
  const urlApi = import.meta.env.VITE_APP_API_URL + '/maps/edit/${id}'
  const history = useHistory();
  const [mapData, setMapData] = useState({
    nombre: '',
    imagen: '',
    comunidad: '',
    año: '',
    distancia: '',
    modalidad: '',
    escala: '',
    categoria: '',
    club: '',
    localidad: '',
    cartografo: '',
    trazador: '',
    federacion: '',
    liga: '',
  });

  useEffect (() => {
    fetch(urlApi)
        .then(response => response.json())
        .then(data => setMapData(data))
        .catch(function() {
            console.log('Funciona')
        });
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMapData((prevData) => ({
      ...prevData,
      [name]: value !== '' ? value : prevData[name],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mapData),
        });

        if (response.ok) {
            console.log('Mapa actualizado con éxito')
            history.push(`/${id}`);
        } else {
            console.error('Error al actualizar el mapa');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
  };

    return (
        <div>
            <h1>Editar Mapa</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={mapData.nombre} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Comunidad:
                    <select name="comunidad" value={mapData.comunidad} onChange={handleChange}>
                        <option value="">Selecciona una comunidad</option>
                        <option value="Andalucía">Andalucía</option>
                        <option value="Aragón">Aragón</option>
                        <option value="Asturias">Asturias</option>
                        <option value="Islas Baleares">Islas Baleares</option>
                        <option value="Canarias">Canarias</option>
                        <option value="Cantabria">Cantabria</option>
                        <option value="Castilla y León">Castilla y León</option>
                        <option value="Castilla-La Mancha">Castilla-La Mancha</option>
                        <option value="Cataluña">Cataluña</option>
                        <option value="Ceuta">Ceuta</option>
                        <option value="Comunidad Valenciana">Comunidad Valenciana</option>
                        <option value="Extremadura">Extremadura</option>
                        <option value="Galicia">Galicia</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Comunidad de Madrid">Comunidad de Madrid</option>
                        <option value="Melilla">Melilla</option>
                        <option value="Región de Murcia">Región de Murcia</option>
                        <option value="Comunidad Foral de Navarra">Comunidad Foral de Navarra</option>
                        <option value="País Vasco">País Vasco</option>
                        <option value="Principado de Asturias">Principado de Asturias</option>
                    </select>
                </label>
                <br />
                <label>
                    Año:
                    <input type="text" name="año" value={mapData.año} onChange={handleChange} />
                </label>
                <br />
                <label>
                Distancia:
                    <select name="distancia" value={mapData.distancia} onChange={handleChange}>
                        <option value="">Selecciona una distancia</option>
                        <option value="Larga">Larga</option>
                        <option value="Media">Media</option>
                        <option value="Sprint">Sprint</option>
                        <option value="Intermedia">Intermedia</option>
                        <option value="Otro">Otro</option>
                    </select>
                </label>
                <br />
                <label>
                    Modalidad:
                    <select name="modalidad" value={mapData.modalidad} onChange={handleChange}>
                        <option value="">Selecciona una modalidad</option>
                        <option value="O-Pie">O-Pie</option>
                        <option value="MTB-O">MTB-O</option>
                        <option value="Rogaine">Rogaine</option>
                        <option value="Raid de Aventura">Raid de Aventura</option>
                        <option value="Trail-O">Trail-O</option>
                        <option value="Esquí-O">Esquí-O</option>
                        <option value="Otro">Otro</option>
                    </select>
                </label>
                <br />
                <label>
                    Escala:
                    <select name="escala" value={mapData.escala} onChange={handleChange}>
                        <option value="">Selecciona una escala</option>
                        <option value="1/3.000">1/3.000</option>
                        <option value="1/4.000">1/4.000</option>
                        <option value="1/7.500">1/7.500</option>
                        <option value="1/10.000">1/10.000</option>
                        <option value="1/15.000">1/15.000</option>
                        <option value="1/20.000">1/20.000</option>
                        <option value="Otro">Otro</option>
                    </select>
                </label>
                <br />
                <label>
                    Categoría:
                    <select name="categoria" value={mapData.categoria} onChange={handleChange}>
                        <option value="">Selecciona una categoría</option>
                        <option value="U-10">U-10</option>
                        <option value="M-12">M-12</option>
                        <option value="F-12">F-12</option>
                        <option value="M-14">M-14</option>
                        <option value="F-14">F-14</option>
                        <option value="M-16">M-16</option>
                        <option value="F-16">F-16</option>
                        <option value="M-18">M-18</option>
                        <option value="F-18">F-18</option>
                        <option value="M-18E">M-18E</option>
                        <option value="F-18E">F-18E</option>
                        <option value="M-20E">M-20E</option>
                        <option value="F-20E">F-20E</option>
                        <option value="M-21A">M-21A</option>
                        <option value="F-21A">F-21A</option>
                        <option value="M-21B">M-21B</option>
                        <option value="F-21B">F-21B</option>
                        <option value="M-E">M-E</option>
                        <option value="F-E">F-E</option>
                        <option value="M-35">M-35</option>
                        <option value="F-35">F-35</option>
                        <option value="M-35A">M-35A</option>
                        <option value="F-35A">F-35A</option>
                        <option value="M-35B">M-35B</option>
                        <option value="F-35B">F-35B</option>
                        <option value="M-40">M-40</option>
                        <option value="F-40">F-40</option>
                        <option value="M-45">M-45</option>
                        <option value="F-45">F-45</option>
                        <option value="M-50">M-50</option>
                        <option value="F-50">F-50</option>
                        <option value="M-60">M-60</option>
                        <option value="F-60">F-60</option>
                        <option value="M-65">M-65</option>
                        <option value="F-65">F-65</option>
                        <option value="M-70">M-70</option>
                        <option value="F-70">F-70</option>
                        <option value="M-75">M-75</option>
                        <option value="F-75">F-75</option>
                        <option value="OPEN AMARILLO">OPEN AMARILLO</option>
                        <option value="OPEN NARANJA">OPEN NARANJA</option>
                        <option value="OPEN ROJO">OPEN ROJO</option>
                        <option value="OPEN AZUL">OPEN AZUL</option>
                        <option value="OPEN NEGRO">OPEN NEGRO</option>
                    </select>
                </label>
                <br />
                <label>
                    Club:
                    <input type="text" name="club" value={mapData.club} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Localidad:
                    <input type="text" name="localidad" value={mapData.localidad} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Cartógrafo:
                    <input type="text" name="cartografo" value={mapData.cartografo} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Trazador:
                    <input type="text" name="trazador" value={mapData.trazador} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Federación:
                    <select name="federacion" value={mapData.federacion} onChange={handleChange}>
                        <option value="">Selecciona una federación</option>
                        <option value="FEDERACIÓN ANDALUZA DEL DEPORTE DE ORIENTACIÓN (F.A.D.O.)">FEDERACIÓN ANDALUZA DEL DEPORTE DE ORIENTACIÓN (F.A.D.O.)</option>
                        <option value="FEDERACIÓ DE CURSES DORIENTACIÓ DE CATALUNYA (F.C.O.C.)">FEDERACIÓ DE CURSES DORIENTACIÓ DE CATALUNYA (F.C.O.C.)</option>
                        <option value="FEDERACIÓN DE ORIENTACIÓN DE LA REGIÓN DE MURCIA (F.O.R.M.)">FEDERACIÓN DE ORIENTACIÓN DE LA REGIÓN DE MURCIA (F.O.R.M.)</option>
                        <option value="FEDERACIÓN DEL DEPORTE DE ORIENTACIÓN DE LA COMUNIDAD VALENCIANA (FEDOCV)">FEDERACIÓN DEL DEPORTE DE ORIENTACIÓN DE LA COMUNIDAD VALENCIANA (FEDOCV)</option>
                        <option value="FEDERACIÓN EXTREMEÑA DE ORIENTACIÓN (FEXO)">FEDERACIÓN EXTREMEÑA DE ORIENTACIÓN (FEXO)</option>
                        <option value="FEDERACIÓ BALEAR DORIENTACIÓ (FBO)">FEDERACIÓ BALEAR DORIENTACIÓ (FBO)</option>
                        <option value="FEDERACIÓN DE ORIENTACIÓN DE CASTILLA Y LEÓN (FOCYL)">FEDERACIÓN DE ORIENTACIÓN DE CASTILLA Y LEÓN (FOCYL)</option>
                        <option value="FEDERACIÓN MADRILEÑA DE ORIENTACIÓN (FEMADO)">FEDERACIÓN MADRILEÑA DE ORIENTACIÓN (FEMADO)</option>
                        <option value="FEDERACIÓN ARAGONESA DE ORIENTACIÓN (FARO)">FEDERACIÓN ARAGONESA DE ORIENTACIÓN (FARO)</option>
                        <option value="FEDERACIÓN DE ORIENTACIÓN DE CASTILLA-LA MANCHA (FECAMADO)">FEDERACIÓN DE ORIENTACIÓN DE CASTILLA-LA MANCHA (FECAMADO)</option>
                        <option value="FEDERACIÓN GALLEGA DE ORIENTACIÓN (FEGADO)">FEDERACIÓN GALLEGA DE ORIENTACIÓN (FEGADO)</option>
                        <option value="DELEGACIÓN TERRITORIAL DE EUSKADI">DELEGACIÓN TERRITORIAL DE EUSKADI</option>
                        <option value="DELEGACIÓN TERRITORIAL F.E.D.O. CANARIAS">DELEGACIÓN TERRITORIAL F.E.D.O. CANARIAS</option>
                        <option value="DELEGACIÓN TERRITORIAL DE ASTURIAS">DELEGACIÓN TERRITORIAL DE ASTURIAS</option>
                        <option value="DELEGACIÓN TERRITORIAL F.E.D.O. CANTABRIA">DELEGACIÓN TERRITORIAL F.E.D.O. CANTABRIA</option>
                    </select>
                </label>
                <br />
                <label>
                    Liga:
                    <select name="liga" value={mapData.liga} onChange={handleChange}>
                        <option value="">Selecciona una liga</option>
                        <option value="Nacional">Nacional</option>
                        <option value="Autonómica">Autonómica</option>
                        <option value="Provincial">Provincial</option>
                        <option value="City Race Euro Tour">City Race Euro Tour</option>
                        <option value="WRE">WRE</option>
                        <option value="Sureste">Sureste</option>
                        <option value="Norte">Norte</option>
                        <option value="Otro">Otro</option>
                    </select>
                </label>
                <br />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default EditMap;