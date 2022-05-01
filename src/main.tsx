import ReactDOM from 'react-dom/client'; //Esse cara é importante para a rendenização do root 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; //Esse cara oferece as rotas abaixo
import ListaLivros from "./routes/listaLivros"
import CadastroLivros from './routes/cadastroLivros'
import Home from './routes/home';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="lista-livros" element={<ListaLivros />}/>
      <Route path="cadastro-livros" element={<CadastroLivros/>}/>
    </Routes>
  </BrowserRouter>
)
