import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdmnistracaoRestaurantes from './paginas/Admin/Restaurantes/AdmnistracaoRestaurantes';
import FormularioRestaurante from './paginas/Admin/Restaurantes/AdmnistracaoRestaurantes/FormularioRestaurante';
import PaginaBaseAdmin from './paginas/Admin/PaginaBaseAdmin';
import AdmnistracaoPratos from './paginas/Admin/Pratos/AdminPratos';
import FormularioPrato from './paginas/Admin/Pratos/FormularioDePratos';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path={'/admin'} element={<PaginaBaseAdmin />}>
        <Route path="restaurantes" element={<AdmnistracaoRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
        <Route path="restaurantes/:id" element={<FormularioRestaurante />} />
        
        
        <Route path='pratos' element={<AdmnistracaoPratos/>}/>
        <Route path='pratos/novo' element={<FormularioPrato/>}/>
        <Route path="pratos/:id" element={<FormularioPrato />} />
      </Route>


    </Routes>
  );
}

export default App;
