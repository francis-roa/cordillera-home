import './App.css';
import './header.css';
import './lineup.css';
import './artistas.css';
import './entradas.css';
import './manifiesto.css';
import './comunidad.css';
import './footer.css';
import './sidemenu.css';
import Header from './components/Header';
import Lineup from './components/Lineup';
import Artistas from './components/Artistas';
import Entradas from './components/Entradas';
import Manifiesto from './components/Manifiesto';
import Comunidad from './components/Comunidad';
import Footer from './components/Footer';
import Sidemenu from './components/Sidemenu';

function App() {
  return (
    <>
      <Sidemenu/>
       <Header/>
       <Lineup/>
       <Artistas/>
       <Entradas/>
       <Manifiesto/>
       <Comunidad/>
       <Footer/>
    </>
  );
}

export default App;
