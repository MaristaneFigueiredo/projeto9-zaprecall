import { useState } from "react";
import styled from "styled-components";

import setaPlay from './assets/img/seta_play.png'
import iconeCerto from './assets/img/icone_certo.png'
import iconeQuase from './assets/img/icone_quase.png'
import iconeErro from './assets/img/icone_erro.png'



export default function PerguntaFechada({ pergunta, indice, onClick }) {


    switch (pergunta.resultado) {

        case 'N': return (
            <>
                <BotaoResposta CorTexto="#FF3030">
                    <p data-identifier="flashcard-index-item">
                        {`Pergunta ${indice + 1}`}
                    </p>
                    <img src={iconeErro} alt="" data-identifier="flashcard-status" />

                </BotaoResposta>

            </>
        )


        case 'Q': return (
            <>
                <BotaoResposta CorTexto="#FF922E">
                    <p data-identifier="flashcard-index-item">
                        {`Pergunta ${indice + 1}`}
                    </p>
                    <img src={iconeQuase} alt="" data-identifier="flashcard-status" />


                </BotaoResposta> 
            </>
        )
        case 'Z': return (
            <>
                <BotaoResposta CorTexto="#2FBE34">
                    <p data-identifier="flashcard-index-item">
                        {`Pergunta ${indice + 1}`}
                    </p>
                    <img src={iconeCerto} alt="" data-identifier="flashcard-status" />

                </BotaoResposta>

            </>
        )


        default: return (
            <>

                <PerguntaFechadaContainer data-identifier="flashcard">
                    <p data-identifier="flashcard-index-item">{`Pergunta ${indice + 1}`}</p>
                    <img src={setaPlay} onClick={onClick} alt="" data-identifier="flashcard-show-btn" />
                </PerguntaFechadaContainer>



            </>

        )

    }
}

const PerguntaFechadaContainer = styled.button`
 width: 300px; 
  height: 65px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}

  img {
  cursor: pointer;
}

`
const BotaoResposta = styled.button`

    width: 300px;
  height: 65px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.CorTexto};
  text-decoration: line-through;
}


`







