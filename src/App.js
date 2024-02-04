
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Contactos } from './components/Contactos';
import { Compras } from './components/Compras';
import { Servicios } from './components/Servicios';
import { Citas } from './components/Citas';

function App() {
  return (
    <div >
      <Header />
      <Main />
      <Footer />
      <Contactos />
      <Compras/>
      <Servicios/>
      <Citas/>
    </div>
  );
}

export default App;
