import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ListaLivros from "./routes/listaLivros"
import CadastroLivros from './routes/cadastroLivros'
import App from './App'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="lista-livros" element={<ListaLivros />}/>
      <Route path="cadastro-livros" element={<CadastroLivros/>}/>
    </Routes>
  </BrowserRouter>
)
