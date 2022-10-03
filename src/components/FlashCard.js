import styled from 'styled-components'
import seta_play from "../assets/img/seta_play.png"
import FCQuestion from "./FCQuestion"
import { useState } from 'react'
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"
import icone_certo from "../assets/img/icone_certo.png"

export default function FlashCard({ index, question, answer, isAnswered, corResp,setisRevealed}) {
  const Cartao = `Pergunta ${index + 1}`
  const [Question, setQuestion] = useState(false)
  const [isClicked, setisClicked] = useState(false)
  function revelaCartao() {
      setQuestion(true)
      setisRevealed(true)
  }
  return (
    <>
      <CaixaFlashCard onClick={()=>revelaCartao()} quest={Question}>
        <p>{Cartao}</p>
        <img src={seta_play} alt="setinha play" />
      </CaixaFlashCard>
      {(Question) ? <FCQuestion question={question} answer={answer} isClicked={isClicked} setisClicked={setisClicked} setQuestion={setQuestion}/> : ""}
      <CaixaFechada quest={Question} isAnswered={isAnswered}>
        <p style={{ color: `${corResp}`, textDecorationLine: "line-through" }}>
          {Cartao}
        </p>
        {corResp === "#FF3030" ? <img src={icone_erro} alt="vermelho" /> : ""}
        {corResp === "#FF922E" ? <img src={icone_quase} alt="laranja" /> : ""}
        {corResp === "#2FBE34" ? <img src={icone_certo} alt="verde" /> : ""}
      </CaixaFechada>
    </>
  )
}



const CaixaFlashCard = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${props => props.quest ? "none" : "flex"};
  align-items: center;
  justify-content: space-between;
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  img{
    cursor:pointer;
  }
`;

const CaixaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${props => props.quest&props.isAnswered ? "flex" : "none"};
  align-items: center;
  justify-content: space-between;
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  img{
    cursor:pointer;
  }
`;