
import PerguntaFechada from "./PerguntaFechada";

export default function ListaPerguntas({ deck, setIndicePerguntaVirada, indicePerguntaVirada }) {
    // export default function ListaPerguntas({ deck }) {
    // console.log('deck', deck)
    
    return (
        <>
            {deck.map((item, indice) => {
        
                return(                    
                    <PerguntaFechada key={indice} pergunta={item} indice={indice} setIndicePerguntaVirada={setIndicePerguntaVirada}  />                    
                    // <PerguntaFechada key={indice} pergunta={item} indice={indice}  /> 
                )          

               

            })}
        </>





    );
}


