import { useState } from "react"
import logo from './assets/img/logo-pequeno.png'

import deck from './deck'
import ListaPerguntas from "./ListaPerguntas"



export default function App() {
    const [contadorflashcards, setContadorflashcards] = useState(0)
    const [contadorDeck, setcontadorDeck] = useState(deck.length)
    const [resultadoflashcards, setResultadoflashcards] = useState([deck])
    const [indicePerguntaVirada, setIndicePerguntaVirada] = useState()
    


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
    //     let arrResultadoflashcards = [...resultadoflashcards]
    //     console.log('indicePerguntaVirada', indicePerguntaVirada)
    //     if (contadorflashcards < contadorDeck) {
    //         const vContadorflashcards = contadorflashcards + 1 
            
    //         arrResultadoflashcards[indicePerguntaVirada].Resultado = resposta
    //         // arrResultadoflashcards[perguntaVirada].Resultado = resposta
   
    //         setContadorflashcards(vContadorflashcards)
    //         setResultadoflashcards(arrResultadoflashcards)

    //     } else{
    //         alert('Não tem mais Flashcards')
    //     }            
        
    // }
 

    function tratarResposta(resposta) {
        // console.log('tratarNaoLembrei')
        if (contadorflashcards < contadorDeck) {
            const vContadorflashcards = contadorflashcards + 1 
            const arrResultadoflashcards = [...resultadoflashcards]
            // console.log('arrResultadoflashcards- antes do foreach',arrResultadoflashcards)

            // deck.forEach(teste)

            // deck.forEach((item,indice) => arrResultadoflashcards[indice].Resultado = resposta )

            resultadoflashcards.forEach(function(item, index) {
                console.log('oi',arrResultadoflashcards[index].Resultado)

                console.log('oi2',item)
                // arrResultadoflashcards[index].Resultado = resposta
                arrResultadoflashcards[index].Resultado = resposta
            });
            // console.log('arrResultadoflashcards- depois do foreach',arrResultadoflashcards)
            // function teste(item) {
            //     arrResultadoflashcards.Resultado = resposta;
            // }
            setContadorflashcards(vContadorflashcards)
            setResultadoflashcards(arrResultadoflashcards)

        } else{
            alert('Não tem mais Flashcards')
        }            
        
    }


    

    return (
        // <>
        //     <GlobalStyle />
        // </> 

        <div className="screen-container">
            <div className="logo-container">
                <img src={logo} alt="Imagem logo" />
                <h1 className="logo-container">ZapRecall</h1>
            </div>

          
            <ListaPerguntas deck={deck} setIndicePerguntaVirada={setIndicePerguntaVirada} indicePerguntaVirada={indicePerguntaVirada}/>
         
            <div className='footer-concluidos'>
                <div className='container-botoes'>
                    <button onClick={()=>tratarResposta("N")}>Não Lembrei </button>

                   
                    <button onClick={()=>tratarResposta("Q")}>Quase não lembrei </button>
                    <button onClick={()=>tratarResposta("Z")}>Zap!</button>
                </div>
                <div>

                    {contadorflashcards}/{contadorDeck} CONCLUÍDOS
                </div>

            </div>





        </div>
    );
}