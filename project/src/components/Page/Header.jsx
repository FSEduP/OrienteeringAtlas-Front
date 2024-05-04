import styles from './header.module.css';
import axios from 'axios';
import { Link } from "react-router-dom"

const Header = () => {

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/auth/logout');
      window.location.href = '/';
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  return (
    <header className={styles.header}>
      <div className={`${styles.dropdown}`}>
        <button className={`${styles.dropbtn}`}>Menú</button>
        <div className={styles.dropdownContent}>
        <a href="/">Inicio</a>
          <a href="/createmap">Subida de Mapa</a>
          <a href="/maps">Vista de Mapas</a>
          <a href="/search">Búsqueda de Mapas</a>
          <a href="/">Mi Biblioteca</a>
        </div>
      </div>
      <div className={styles.webLogo}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><img src="/images/Logo2.png"></img></Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h1>OrienteeringAtlas</h1></Link>
      </div>
      <div className={styles.webLogo}>
        <div className={styles.sky}>
          <img src="/images/sun.png" id="sun-icon" className={styles.sunicon}/>
        </div>
        <div className={styles.logs}>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/"><button onClick={handleLogout}>Logout</button></Link>
        </div>
      </div>

    </header>
  );
};

export default Header