import { useState } from 'react';
import axios from 'axios';

const Login = () => {
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
      setError('Por favor, completa todos los campos');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/auth/login', formData);
      console.log(response.data);
      window.location.href = '/maps';
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setError('Error durante el inicio de sesión. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <div>
        <h3>Bienvenido a OrienteeringAtlas</h3>
        <p>¡Inicia sesión para acceder a tu cuenta y explorar el mundo de la orientación! Si aún no tienes una cuenta, puedes registrarte <a href="/register">aquí</a>.</p>
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
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;