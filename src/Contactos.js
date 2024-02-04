
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Contactos } from './components/Contactos';
import { Compras } from './components/Compras';


function Contactos() {
  return (
    <div >
      <Header />
      <Contactos />
      <Footer />
    </div>
  );
}

export default Contactos;
