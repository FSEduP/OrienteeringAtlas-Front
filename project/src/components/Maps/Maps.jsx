import { Link } from "react-router-dom"
import styles from './maps.module.css';

const Maps = ({data}) => {
  return (
    <>
    <div className={styles.map}>
      <h2><u>Lista de mapas</u></h2>
      <Link to="/createmap"><button>Añade un mapa</button></Link>
      <div>
      <ul>
        {data.map(item => (
          <li key={item._id}  className={styles.pack}>
                  <Link to={`/${item._id}`}>{item.nombre}</Link>
                  <img src={`${item.imagen}`} />
          </li>
        ))}
      </ul>
      </div>
    </div>
    </>
  )
};

export default Maps;