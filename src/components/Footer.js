import styled from 'styled-components'
import { useState } from 'react';
export default function Footer({number}) {
    const [isAnswered,setisAnswered]=useState(false)
    const [isEnabled,setisEnabled]=useState(false)
    function responderQuestao (){
        if (!isAnswered){
            setisAnswered(true)
            setisEnabled(!isEnabled)

        }
    }
    return (
        <FooterConcluidos>
            <ContainerBotoes>
                <button disabled={isEnabled} style={{ backgroundColor: "#FF3030", border: "1px solid #FF3030" }} onClick={responderQuestao}>Não lembrei</button>
                <button disabled={isEnabled} style={{ backgroundColor: "#FF922E", border: "1px solid #FF922E" }} onClick={responderQuestao}>Quase não lembrei</button>
                <button disabled={isEnabled} style={{ backgroundColor: "#2FBE34", border: "1px solid #2FBE34" }} onClick={responderQuestao}>Zap!</button>
            </ContainerBotoes>
            0/{number} CONCLUÍDOS
        </FooterConcluidos>
    )
}



const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
  button{
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid;
    padding:5px;
    cursor:pointer;
  }
  button:disabled{
    cursor:default;
  }
`