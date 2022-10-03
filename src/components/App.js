
/* import icone_certo from "../assets/img/icone_certo.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"
import party from "../assets/img/party.png"
import sad from "../assets/img/sad.png" */
import styled from 'styled-components'
import FlashCard from "./FlashCard"
import Header from "./Header"
import Footer from "./Footer"
/* import { useState } from "react" */
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
export default function App() {
    return (
        <>
            <ContainerTela>
                <Header/>
                {deck.map((obj, i) => (
                    <FlashCard key={i} index={i} question={obj.question} answer={obj.answer}/>
                ))}

            </ContainerTela>
            <Footer number={deck.length}/>
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
