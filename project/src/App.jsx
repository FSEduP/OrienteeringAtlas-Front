import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Maps from "./components/Maps/Maps.jsx";
import MapDetailPage from "./components/Maps/MapDetailPage.jsx";
import AddMap from './components/Maps/AddMap.jsx';
import Footer from "./components/Page/Footer.jsx";
import Header from "./components/Page/Header.jsx";
import Dashboard from "./components/Page/Dashboard.jsx";
import Login from "./components/User/Login.jsx";
import Register from "./components/User/Register.jsx";
import Search from "./components/Maps/Search.jsx";
import EditMap from "./components/Maps/EditMap.jsx";
import DeleteMap from "./components/Maps/DeleteMap.jsx";


const App = () => {
  const [data, setData] = useState(null)
  const urlApi = import.meta.env.VITE_APP_API_URL

  const fetchData = async () => {
    try {
      const response = await fetch(urlApi)
      const resData = await response.json()
      setData(resData)

    } catch (error) {
      console.log(error)
    }
  }

  const handleAddMap = async () => {
    await fetchData();
  };

  return (
    <Router>
      <div className="orienteeringApp">
        <Header />
        <div className="body">
          {data === null 
          ? (<div>Cargando...</div>) 
          : 
            <Routes>
              <Route path={`${urlApi}/`} element={<Dashboard  />} />
              <Route path="/login" element={<Login  />} />
              <Route path="/register" element={<Register  />} />
              <Route path="/maps" element={<Maps data={data} />} />
              {Array.isArray(data) && data.map(item => (
                <Route key={item._id} path ={`/${item._id}`} element={<MapDetailPage item={item} />} />
              ))
              }
              <Route path="/createmap" element={<AddMap onSubmit={handleAddMap}/>} />
              <Route path="/edit/:id" element={<EditMap />} />
              <Route path="/delete/:id" element={<DeleteMap />} />
              <Route path="/search" element={<Search  data={data}/>} />
            </Routes>
          }
          <div className="go-up-arrow-div">
            <img src="/images/arrow.png" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="go-up-arrow"/>
          </div> 
        </div>

        <Footer />  
      </div>        
    </Router>      
  )
};

export default App;