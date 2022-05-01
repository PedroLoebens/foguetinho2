import  Navbar  from '../components/Navbar';
import styled from 'styled-components'


const LorenDiv = styled.h1`
   color: red;
   font-size: 15px;
   `
const Button = styled.button`
  font-size: 70px;
  margin: 50px;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: #FFFFf;
  color: black;
 `;

function CadastroLivros() {

   return (
      <div>
         <Navbar />
      
         <h1>Essa Tela aqui deve exibir a tela de Cadastros</h1>
         <LorenDiv>
            ipsun Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas neque eos assumenda placeat accusamus dicta praesentium.
            Cupiditate quis, aperiam voluptatum nobis, placeat magni dignissimos dicta, iusto iste minima ut?
         </LorenDiv>
         <br />
         <div>
            ipsun Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas neque eos assumenda placeat accusamus dicta praesentium.
            Cupiditate quis, aperiam voluptatum nobis, placeat magni dignissimos dicta, iusto iste minima ut?
         </div>

         <Button onClick={() => {alert("fui clicado")}}>Clique em Mim</Button>
      </div>
   )
}

export default CadastroLivros;