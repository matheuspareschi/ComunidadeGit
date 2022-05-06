import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsuarioProvider} from "./common/context/UsuarioContext";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import BuscaInicial from "./pages/BuscaInicial";
import Favoritos from "./pages/Favoritos";
import Rodape from "./components/Rodape/Rodape";
import Repositorio from "./pages/Repositorio";


function App() {
  return (
    <BrowserRouter >
      <UsuarioProvider>
        <Cabecalho /> 
              <Routes>      
                  <Route exac path = "/" element ={<BuscaInicial />} />
                  <Route path = "repositorio" element ={<Repositorio />} />
                  <Route path = "favoritos" element ={<Favoritos />} />
              </Routes>
      </UsuarioProvider>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
