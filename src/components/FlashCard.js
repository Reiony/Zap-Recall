import styled from 'styled-components'
import seta_play from "../assets/img/seta_play.png"
import FCQuestion from "./FCQuestion"
/* import FCClosed from "./FCClosed" */
import { useState } from 'react'

export default function FlashCard({ index, question, answer }) {
  const [Cartao, setCartao] = useState(`Pergunta ${index + 1}`)
  const [Question, setQuestion] = useState(false)
  const [isClicked, setisClicked] = useState(false)
  console.log(question)
  console.log(answer)
  function revelaCartao() {
    if (!Question) {
      setCartao(question)
      setQuestion(true)
    }
  }
  function revelaResposta(){
    if (!isClicked){
        setisClicked(true)
    }
}
  return (
    <>
      <CaixaFlashCard onClick={revelaCartao} Question={Question}>
        <p>{Cartao}</p>
        <img src={seta_play} alt="setinha play" />
      </CaixaFlashCard>
      {(Question) ? <FCQuestion question={question} answer={answer} funcao={revelaResposta} isClicked={isClicked}/> : ""}
      
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
  display: ${props => props.Question ? "none" : "flex"};
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