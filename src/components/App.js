import styled from 'styled-components'
import FlashCard from "./FlashCard"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from 'react';
const deck = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __ ", answer: "passar diferentes informações para componentes " },
    { question: "Usamos estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]
const colors = ["#FF3030","#FF922E","#2FBE34"]
export default function App() {
    const [isAnswered, setisAnswered] = useState (false)
    const [isRevealed, setisRevealed] = useState (false)
    const [corResp, setcorResp] = useState ("")
    return (
        <>
            <ContainerTela>
                <Header/>
                {deck.map((obj, i) => (
                    <FlashCard key={i} index={i} question={obj.question} answer={obj.answer} isAnswered={isAnswered} isRevealed={isRevealed} setisRevealed={setisRevealed} /* corResp={corResp} *//>
                ))}
            </ContainerTela>
            <Footer number={deck.length} cores={colors} setisAnswered={setisAnswered} isAnswered={isAnswered} isRevealed={isRevealed} setisRevealed={setisRevealed} corResp={corResp} setcorResp={setcorResp}/>
        </>

    )
}










//STYLED COMPONENTS





const ContainerTela = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
