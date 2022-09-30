import { useState } from "react"
import styled from "styled-components"

import GlobalStyle from "./assets/css/GlobalStyle"

import logo from './assets/img/logo-pequeno.png'

import deck from './deck'
import ListaPerguntas from "./ListaPerguntas"




export default function App() {
    const [contadorflashcards, setContadorflashcards] = useState(0)
    const [contadorDeck, setcontadorDeck] = useState(deck.length)
    const [cartas, setCartas] = useState(deck)
    const [perguntaVirada, setPerguntaVirada] = useState()
    const [desabilitaBotoes, setDesabilitaBotoes] = useState(true)





    function tratarResposta(resposta) {      


        if (contadorflashcards < contadorDeck) {
            const vContadorflashcards = contadorflashcards + 1

           
            let newCartas = [...cartas]

            newCartas[perguntaVirada].resultado = resposta


            setContadorflashcards(vContadorflashcards)
            
            setCartas(newCartas)
            setPerguntaVirada(null)
            setDesabilitaBotoes(true)

            
        } else {
            alert('Não tem mais Flashcards')
        }


    }




    return (
        <>
            <GlobalStyle />


            <ScreenContainer>
                <LogoContainer>
                    <img src={logo} alt="Imagem logo" />                    
                    <h1>ZapRecall</h1>
                </LogoContainer>

             
                <ListaPerguntas deck={cartas} setPerguntasViradas={setPerguntaVirada} perguntasViradas={perguntaVirada} desabilitaBotoes={setDesabilitaBotoes} />

                <FooterConcluidos>
                    <ContainerBotoes >         
                        <Botao disabled={desabilitaBotoes} data-identifier="forgot-btn" corBotao="#FF3030" onClick={() => tratarResposta("N")}>Não Lembrei </Botao>


                        <Botao disabled={desabilitaBotoes} data-identifier="almost-forgot-btn" corBotao="#FF922E" onClick={() => tratarResposta("Q")}>Quase não lembrei </Botao>
                        <Botao disabled={desabilitaBotoes} data-identifier="zap-btn" corBotao="#2FBE34" onClick={() => tratarResposta("Z")}>Zap!</Botao>

                    </ContainerBotoes>


                    <div data-identifier="flashcard-counter">
                        {contadorflashcards}/{contadorDeck} CONCLUÍDOS
                    </div>

                </FooterConcluidos>





            </ScreenContainer>
        </>
    );
}

const ScreenContainer = styled.div`
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


const LogoContainer = styled.div`
    display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
  width: 52px;
}

h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}
 

`

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
 
`
const Botao = styled.button`
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
  background: ${props => props.corBotao};
  border-radius: 5px;
  border: 1px solid ${props => props.corBotao};
  padding:5px;
  cursor: pointer;
`