import { useState } from "react"
import logo from './assets/img/logo-pequeno.png'

import deck from './deck'
import ListaPerguntas from "./ListaPerguntas";
;

export default function App() {
    const [contadorflashcards, setContadorflashcards] = useState(0)
    const [contadorDeck, setcontadorDeck] = useState(deck.length)
    //  const [tarefas, setTarefas] = useState(tarefasIniciais)

    return (
        // <>
        //     <GlobalStyle />
        // </> 

        <div className="screen-container">
            <div className="logo-container">
                <img src={logo} alt="Imagem logo" />
                <h1 className="logo-container">ZapRecall</h1>
            </div>

            {/* <div className='pergunta-fechada'> */}
                <ListaPerguntas deck={deck} />
            {/* </div> */}

            <div className='footer-concluidos'>
                <div className='container-botoes'>
                    <button>Não Lembrei </button>
                    <button>Quase não lembrei </button>
                    <button>Zap!</button>
                </div>
                <div>

                    {contadorflashcards}/{contadorDeck} CONCLUÍDOS
                </div>

            </div>





        </div>
    );
}