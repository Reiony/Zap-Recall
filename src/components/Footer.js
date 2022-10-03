import { useState } from 'react'
import styled from 'styled-components'
export default function Footer({number, isRevealed, setisRevealed,cores,setcorResp,setisAnswered}) {
    const [contador,setContador]=useState(0)
    function responderQuestao (cor){
        setcorResp(cor)
        setisRevealed(false)
        setisAnswered(true)
        setContador(contador+1)
    }
    return (
        <FooterConcluidos>
            <ContainerBotoes>
                <button disabled={!isRevealed} style={{ backgroundColor: `${cores[0]}`, border: `1px solid ${cores[0]}` }} onClick={()=>responderQuestao(cores[0])}>Não lembrei</button>
                <button disabled={!isRevealed} style={{ backgroundColor: `${cores[1]}`, border: `${cores[1]}`}} onClick={()=>responderQuestao(cores[1])}>Quase não lembrei</button>
                <button disabled={!isRevealed} style={{ backgroundColor: `${cores[2]}`, border: `${cores[2]}` }} onClick={()=>responderQuestao(cores[2])}>Zap!</button>
            </ContainerBotoes>
            {contador}/{number} CONCLUÍDOS
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
    filter: opacity(0.6);
  }
`