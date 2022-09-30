import { useState } from "react";
import styled from "styled-components";

import iconeVirar from './assets/img/setinha.png'

export default function PerguntaAberta({ pergunta, desabilitaBotoes }) {

    const [respostaVirada, setRespostaVirada] = useState(false)




    return (
        <PerguntaAbertaContainer data-identifier="flashcard-question flashcard-answer">
                {(respostaVirada === false) ? pergunta.pergunta : pergunta.resposta}
                {(respostaVirada === false) &&
                                <img src={iconeVirar} onClick={() => {setRespostaVirada(true); desabilitaBotoes(false)}} alt="" data-identifier="flashcard-turn-btn"/>
                }
        </PerguntaAbertaContainer>
    )
    



}


const PerguntaAbertaContainer = styled.div `
  width: 270px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}

`