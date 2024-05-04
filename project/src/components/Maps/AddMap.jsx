import { useState } from 'react';

const AddMap = ({ onSubmit }) => {
  const [mapData, setMapData] = useState({
    nombre: '',
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
    liga: ''
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMapData({ ...mapData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('nombre', mapData.nombre);
      formData.append('imagen', imageFile);
      formData.append('comunidad', mapData.comunidad);
      formData.append('año', mapData.año);
      formData.append('distancia', mapData.distancia);
      formData.append('modalidad', mapData.modalidad);
      formData.append('escala', mapData.escala);
      formData.append('categoria', mapData.categoria);
      formData.append('club', mapData.club);
      formData.append('localidad', mapData.localidad);
      formData.append('cartografo', mapData.cartografo);
      formData.append('trazador', mapData.trazador);
      formData.append('federacion', mapData.federacion);
      formData.append('liga', mapData.liga);

      const response = await fetch("http://localhost:3000/createmap", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Datos enviados correctamente");
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
    setMapData({
      nombre: '',
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
      liga: ''
    });
    setImageFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p><u>* Campos Obligatorios</u></p>
      </div>
      <div>
        <label><u>Nombre:*</u></label>
        <input
          type="text"
          name="nombre"
          value={mapData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label><u>Añadir Imagen:*</u></label>
        <input
          type="file"
          name="imagen"
          encType="multipart/form-data"
          onChange={handleImageChange}
          required
        />
      </div>
      <div>
        <label><u>Comunidad:*</u></label>
        <select
          name="comunidad"
          value={mapData.comunidad}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
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
      </div>
      <div>
        <label><u>Año:*</u></label>
        <input
          type="text"
          name="año"
          value={mapData.año}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label><u>Distancia:*</u></label>
        <select
          name="distancia"
          value={mapData.distancia}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Larga">Larga</option>
          <option value="Media">Media</option>
          <option value="Sprint">Sprint</option>
          <option value="Intermedia">Sprint</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label><u>Modalidad:*</u></label>
        <select
          name="modalidad"
          value={mapData.modalidad}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="O-Pie">O-Pie</option>
          <option value="MTB-O">MTB-O</option>
          <option value="Rogaine">Rogaine</option>
          <option value="Raid de Aventura">Raid de Aventura</option>
          <option value="Trail-O">Trail-O</option>
          <option value="Esquí-O">Esquí-O</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label><u>Escala:*</u></label>
        <select
          name="escala"
          value={mapData.escala}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="1/3.000">1/3.000</option>
          <option value="1/4.000">1/4.000</option>
          <option value="1/7.500">1/7.500</option>
          <option value="1/10.000">1/10.000</option>
          <option value="1/15.000">1/15.000</option>
          <option value="1/20.000">1/20.000</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label><u>Categoría:*</u></label>
        <select
          name="categoria"
          value={mapData.categoria}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
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
          <option value="M-35">M-35A</option>
          <option value="F-35">F-35A</option>
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
      </div>
      <div>
        <label>Club:</label>
        <input
          type="text"
          name="club"
          value={mapData.club}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Localidad:</label>
        <input
          type="text"
          name="localidad"
          value={mapData.localidad}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Cartógrafo:</label>
        <input
          type="text"
          name="cartografo"
          value={mapData.cartografo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Trazador:</label>
        <input
          type="text"
          name="trazador"
          value={mapData.trazador}
          onChange={handleChange}
        />
      </div>
      <div>
        <label><u>Federación:*</u></label>
        <select
          name="federacion"
          value={mapData.federacion}
          required
          onChange={handleChange}
        >
          <option value="">Selecciona una opción</option>
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
      </div>
      <div>
        <label><u>Liga:*</u></label>
        <select
          name="liga"
          value={mapData.liga}
          required
          onChange={handleChange}
        >
          <option value="">Selecciona una opción</option>
          <option value="Nacional">Nacional</option>
          <option value="Autonómica">Autonómica</option>
          <option value="Provincial">Provincial</option>
          <option value="City Race Euro Tour">City Race Euro Tour</option>
          <option value="WRE">WRE</option>
          <option value="Sureste">Sureste</option>
          <option value="Norte">Norte</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <button type="submit">Añadir Mapa</button>
      </div>
    </form>
  );
};

export default AddMap;