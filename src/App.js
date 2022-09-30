import { useState } from "react"

import GlobalStyle from "./assets/css/GlobalStyle"

import logo from './assets/img/logo-pequeno.png'

import deck from './deck'
import ListaPerguntas from "./ListaPerguntas"


//let arrResultadoflashcards = []         

export default function App() {
    const [contadorflashcards, setContadorflashcards] = useState(0)
    const [contadorDeck, setcontadorDeck] = useState(deck.length)
    const [resultadoflashcards, setResultadoflashcards] = useState([deck])
    const [indicePerguntaVirada, setIndicePerguntaVirada] = useState()
    //let arrResultadoflashcards = [...deck]     




    function tratarResposta(resposta) {

        console.log("indicePerguntaVirada", indicePerguntaVirada)
        console.log("resposta", resposta)


        if (contadorflashcards < contadorDeck) {
            const vContadorflashcards = contadorflashcards + 1
            let arrResultadoflashcards = [...resultadoflashcards]

            arrResultadoflashcards[indicePerguntaVirada].Resultado = resposta


            setContadorflashcards(vContadorflashcards)
            setResultadoflashcards(arrResultadoflashcards)
            setIndicePerguntaVirada(null)

            console.log("arrResultadoflashcards", arrResultadoflashcards)
        } else {
            alert('Não tem mais Flashcards')
        }


    }





    // function setarResposta(resposta) {
    //     let newCartas = [...cartas]
    //     let concluidos = qtdConcluidos + 1
    //     newCartas[perguntaVirada].resultado = resposta
    //     setCartas(newCartas)
    //     setPerguntaVirada(null)
    //     setQtdConcluidos(concluidos)

    // }




    // function tratarResposta(resposta) {
    //     // console.log('tratarNaoLembrei')
    //     if (contadorflashcards < contadorDeck) {
    //         const vContadorflashcards = contadorflashcards + 1 
    //         const arrResultadoflashcards = [...resultadoflashcards]         

    //         // console.log(' arrResultadoflashcards[i].inicio',arrResultadoflashcards)
    //         // console.log(' arrResultadoflashcards[0].Pergunta',arrResultadoflashcards[0].Pergunta)
    //         // console.log(' resultadoflashcards[i].inicio',resultadoflashcards)
    //         // console.log(' resultadoflashcards[0].Pergunta',resultadoflashcards[0].Pergunta)
    //         // console.log(' deck',deck)
    //         // console.log(' deck[0].Pergunta',deck[0].Pergunta)
    //         for (let i = 0; i <= resultadoflashcards.length; i++ ) {
    //              arrResultadoflashcards[i].Resultado=resposta

    //         }
    //         console.log('arrResultadoflashcards_Final',arrResultadoflashcards)

    //         // resultadoflashcards.forEach(function(item, index) {

    //         //     console.log('arrResultadoflashcards[index]',arrResultadoflashcards[index])


    //         //     arrResultadoflashcards[index]= {...item, Resultado:resposta}

    //         // });
    //         // console.log('arrResultadoflashcards_Final',arrResultadoflashcards)
    //         setContadorflashcards(vContadorflashcards)
    //         setResultadoflashcards(arrResultadoflashcards)

    //     } else{
    //         alert('Não tem mais Flashcards')
    //     }            

    // }




    return (
        <>
            {/* <GlobalStyle /> */}


            <div className="screen-container">
                <div className="logo-container">
                    <img src={logo} alt="Imagem logo" />
                    <h1 className="logo-container">ZapRecall</h1>
                </div>


                <ListaPerguntas deck={deck} setIndicePerguntaVirada={setIndicePerguntaVirada} indicePerguntaVirada={indicePerguntaVirada} />
                {/* <ListaPerguntas deck={deck}/> */}

                <div className='footer-concluidos'>
                    <div className='container-botoes'>
                        <button onClick={() => tratarResposta("N")}>Não Lembrei </button>
                        <button onClick={() => tratarResposta("Q")}>Quase não lembrei </button>
                        <button onClick={() => tratarResposta("Z")}>Zap!</button>
                    </div>
                    <div>

                        {contadorflashcards}/{contadorDeck} CONCLUÍDOS
                    </div>

                </div>





            </div>
        </>
    );
}