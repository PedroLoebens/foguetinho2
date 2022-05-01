import { Link } from "react-router-dom";
import styled from 'styled-components';

const CustomContainer = styled.div`
background: black; 
display: flex;
flex-direction: row;
`

export default function Navbar() {
   return (
      <nav>
         <CustomContainer>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
            </ul>
            <ul>
               <li>
                  <Link to="/lista-livros">Lista de Livros</Link>
               </li>
            </ul>
            <ul>
               <li>
                  <Link to="/cadastro-livros">Cadastro de Livors</Link>
               </li>
            </ul>
         </CustomContainer>
      </nav>
   );
}
