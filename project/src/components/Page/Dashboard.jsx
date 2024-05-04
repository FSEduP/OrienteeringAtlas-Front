import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <h2>¡Bienvenido a OrienteeringAtlas!</h2>
      <p>¡Bienvenido a OrienteeringAtlas, tu destino definitivo para explorar el mundo de la orientación! En OrienteeringAtlas, los entusiastas de la orientación pueden registrarse, compartir y explorar una amplia gama de mapas utilizados en competiciones de orientación en todo el mundo. Con una interfaz fácil de usar y un sistema de búsqueda avanzado, OrienteeringAtlas es la plataforma perfecta para todos los amantes de este deporte emocionante.</p>
      <div>

    <div>
      <h3><u>Registro de Usuarios</u></h3>
      <p>Los usuarios pueden crear una cuenta para acceder a todas las funciones de la plataforma.</p>
      <Link to="/register"><button>Registro de Usuarios</button></Link> <br /><br />
      <Link to="/login"><button>LOGIN</button></Link>
    </div>
    <div>
      <h3><u>Subida de Mapas</u></h3>
      <p>Los usuarios pueden subir mapas de orientación en los que han competido, agregando detalles como la ubicación y la fecha.</p>
      <Link to="/createmap"><button>Subida de mapas</button></Link>
    </div>
    <div>
      <h3><u>Exploración de Mapas</u></h3>
      <p>Los usuarios pueden explorar una amplia biblioteca de mapas de orientación de todo el mundo, filtrando por ubicación y dificultad.</p>
      <Link to="/maps"><button>Exploración de Mapas</button></Link>
    </div>
    <div>
      <h3><u>Detalles y Comentarios</u></h3>
      <p>Cada mapa tiene su propia página detallada con información específica y comentarios de otros usuarios.</p>
    </div>
    <div>
      <h3><u>Sistema de Búsqueda Avanzado</u></h3>
      <p>Los usuarios pueden buscar mapas de orientación específicos según sus preferencias utilizando una variedad de filtros.</p>
      <Link to="/search"><button>Sistema de Búsqueda Avanzado</button></Link>
    </div>
    <div>
      <h3><u>Comunidad Activa</u></h3>
      <p>Los usuarios pueden interactuar, compartir experiencias y seguir a otros usuarios en la plataforma.</p>
    </div>
    <div>
      <h3><u>Biblioteca Personalizada</u></h3>
      <p>Cada usuario tiene su propia biblioteca personalizada donde puede guardar mapas favoritos y seguir a otros usuarios.</p>
      <Link to="/"><button>Biblioteca Personalizada</button></Link>
    </div>
  </div>


      <ul>
        <h3>Top 5 Contribuyentes</h3>
        <li>1.    ...</li>
        <li>2.    ...</li>
        <li>3.    ...</li>
        <li>4.    ...</li>
        <li>5.    ...</li>
      </ul>

      <ul>
        <h3>Estadísticas</h3>
        <li>Mapas subidos: ...</li>
        <li>Numero de usuarios: ...</li>
        <li>Modalidad mas practicada: ...</li>
        <li>Mapa mas valorado: ...</li>
      </ul>
    </>
  )
};

export default Dashboard;