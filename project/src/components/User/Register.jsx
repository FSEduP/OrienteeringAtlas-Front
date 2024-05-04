import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const urlApi = import.meta.env.VITE_APP_API_URL + '/auth/register'
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.password === '') {
      setError('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post(urlApi, formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error durante el registro:', error);
    }
  };

  return (
    <div>
      <h2>Regístrate, tendrás acceso a:</h2>
      <div>
          <ul>
            <li><strong>Subida de Mapas:</strong> Comparte tus propios mapas y contribuye a nuestra creciente base de datos de mapas.</li>
            <li><strong>Vista de Mapas:</strong> Explora una gran variedad de mapas de orienteeringAtlas de diferentes lugares y categorías.</li>
            <li><strong>Búsqueda de Mapas:</strong> Encuentra rápidamente los mapas que necesitas utilizando nuestra potente herramienta de búsqueda.</li>
            <li><strong>Mi Biblioteca:</strong> Guarda tus mapas favoritos y lleva un registro de tus actividades.</li><br />
            <li>Además, al registrarte, te unirás a una comunidad apasionada de entusiastas de la orientación, donde podrás compartir tus experiencias, hacer preguntas, obtener consejos y mucho más.</li>
            <li>¡No te pierdas la oportunidad de formar parte de OrienteeringAtlas! y comienza tu emocionante viaje en el mundo del orienteering.</li>
            <li>¿Ya tienes una cuenta? Accede <a href="/login">aquí</a>.</li>
          </ul>
        </div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;