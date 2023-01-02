import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdmnistracaoRestaurantes from './paginas/Admin/Restaurantes/AdmnistracaoRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdmnistracaoRestaurantes/> }/> 
    </Routes>
  );
}

export default App;
