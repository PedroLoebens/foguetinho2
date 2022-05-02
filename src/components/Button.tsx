import styled from 'styled-components'

const Btn = styled.button`
  font-size: 15px;
  display: flex;
  margin: 15px;
  padding: 0.25em;
  border-radius: 3px;
  background-color: purple;
  color: black;
 
 `;

function Customizedbutton() {

   return (
      <Btn onClick={() => { alert("fui clicad") }}>Isso é um botão</Btn>
   )


}
export default Customizedbutton;