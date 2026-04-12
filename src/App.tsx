import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorito from './pages/Favorito';
import Original from './pages/Original';
import Informativa from './pages/Informativa';
import Usuario from './pages/Usuario';
import Detalle from './pages/Detalle';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorito" element={<Favorito />} />
          <Route path="/original" element={<Original />} />
          <Route path="/informativa" element={<Informativa />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/detalle/:id" element={<Detalle />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;