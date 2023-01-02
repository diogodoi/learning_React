import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdmnistracaoRestaurantes from './paginas/Admin/Restaurantes/AdmnistracaoRestaurantes';
import FormularioRestaurante from './paginas/Admin/Restaurantes/AdmnistracaoRestaurantes/FormularioRestaurante';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdmnistracaoRestaurantes/> }/>
      <Route path="/admin/restaurantes/novo" element={<FormularioRestaurante/>}/> 
      <Route path="/admin/restaurantes/:id" element={<FormularioRestaurante/>}/> 
    </Routes>
  );
}

export default App;
