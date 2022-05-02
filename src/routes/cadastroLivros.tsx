import  Navbar  from '../components/Navbar';
import styled from 'styled-components'
import Customizedbutton from '../components/Button'


const LorenDiv = styled.h1`
   color: red;
   font-size: 15px;
   `

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

         <Customizedbutton />
      </div>
   )
}

export default CadastroLivros;