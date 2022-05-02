import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Customizedbutton from '../components/Button'

const CustomContainer = styled.div`
display: flex;
flex-direction: row;
color: white;


`;
const CustonNav = styled.nav`
margin-top: 15px;
border: solid 5px ;
border-radius: 30px
`;

export default function Navbar() {
   return (
      <CustonNav>
         
         <CustomContainer>
            <Customizedbutton />
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
      </CustonNav>
   );
}
