import { Link } from "react-router-dom";
import styles from './maps.module.css';

const MapDetailPage = ({item}) => {
    return (
      <>
      <div className={styles.map}>
        <h2>Mapa: {item.nombre}</h2>

        <img src= {`${item.imagen}`} />

        <div className={styles.container}>
          <p>Comunidad:</p>
          <p className={styles.text}>{item.comunidad}</p>
        </div>

        <div className={styles.container}>
          <p>Año:</p>
          <p className={styles.text}>{item.año}</p>
        </div>

        <div className={styles.container}>
            <p>Distancia:</p>
            <p className={styles.text}>{item.distancia}</p>
        </div>

        <div className={styles.container}>
            <p>Modalidad:</p>
            <p className={styles.text}>{item.modalidad}</p>
        </div>

        <div className={styles.container}>
          <p>Escala:</p>
          <p className={styles.text}>{item.escala}</p>
        </div>

        <div className={styles.container}>
          <p>Categoría:</p>
          <p className={styles.text}>{item.categoria}</p>
        </div>

        <div className={styles.container}>
          <p>Club:</p>
          <p className={styles.text}>{item.club}</p>
        </div>

        <div className={styles.container}>
          <p>Localidad:</p>
          <p className={styles.text}>{item.localidad}</p>
        </div>

        <div className={styles.container}>
          <p>Cartógrafo:</p>
          <p className={styles.text}>{item.cartografo}</p>
        </div>

        <div className={styles.container}>
          <p>Trazador:</p>
          <p className={styles.text}>{item.trazador}</p>
        </div>

        <div className={styles.container}>
          <p>Federación:</p>
          <p className={styles.text}>{item.federacion}</p>
        </div>

        <div className={styles.container}>
          <p>Liga:</p>
          <p className={styles.text}>{item.liga}</p>
        </div>
        <div className={styles.aContainer}>
          <Link to={`/edit/${item._id}`}><button>Editar Mapa</button></Link>
          <Link to={`/delete/${item._id}`}><button>Borrar Mapa</button></Link>
        </div>
        </div>
      </>
    );
};

export default MapDetailPage;