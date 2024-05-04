import { Link } from "react-router-dom";
import { useHistory } from 'react-router-use-history';
import { useParams } from 'react-router-dom';
import styles from './maps.module.css';

const DeleteMap = () => {
    const { id } = useParams();
    const history = useHistory();

    const handleDelete = async () => {
        const urlApi = import.meta.env.VITE_APP_API_URL + "/createmap/delete/${id}"
        try {
            const response = await fetch(urlApimaps, {
                method: 'POST',
            });

            if (response.ok) {
                history.push('/');
            } else {
                console.error('Error al borrar el mapa');
            }
        } catch (error) {
            console.error('Error al borrar el mapa', error);
        }
    };

    return (
        <div>
            <h2>Borrar Mapa</h2>
            <p>Esta acción es permanente. ¿Estás seguro de que deseas borrar este mapa?</p>
            <div className={styles.aContainer}>
                <button onClick={handleDelete}>Borrar</button>
                <Link to="/"><button>Cancelar</button></Link>
            </div>
        </div>
    );
};

export default DeleteMap;