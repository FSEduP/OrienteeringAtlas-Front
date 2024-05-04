import styles from './footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <img src="/images/Logo2.png"></img>
        <div>
          <p>Estos mapas han sido realizados para la práctica de orientación.</p>
          <p>La posesión no da acceso a la zona y su uso implica siempre respeto y cuidado del medio ambiente.</p>
        </div>
        <img src="/images/Logo2.png"></img>
      </footer>
    );
};

export default Footer