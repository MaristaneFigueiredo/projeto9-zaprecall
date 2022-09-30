
import PerguntaFechada from "./PerguntaFechada";

import PerguntaAberta from "./PerguntaAberta";




export default function ListaPerguntas({deck, setPerguntasViradas, perguntasViradas, desabilitaBotoes}) {

    function abrirPergunta(indice) {
        const novaPerguntaVirada =  indice
        setPerguntasViradas(novaPerguntaVirada)

       
    }

    return(
        <>
            {deck.map( (item, indice) => {
                return(
                    <div key={indice} data-identifier="flashcard">
                    {
                        (perguntasViradas === indice) ?
                        <PerguntaAberta pergunta={item} desabilitaBotoes={desabilitaBotoes} />
                        :
                        <PerguntaFechada pergunta={item} indice={indice}  
                            onClick={() => abrirPergunta(indice)} 
                            
                        />
                    }
                    </div>

                    
                )
            })}
        </>
    )
}


