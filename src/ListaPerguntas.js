
import PerguntaFechada from "./PerguntaFechada";

export default function ListaPerguntas({ deck, setIndicePerguntaVirada, indicePerguntaVirada }) {
    console.log('deck', deck)
    
    return (
        <>
            {deck.map((item, indice) => {
        
                return(                    
                    <PerguntaFechada key={indice} pergunta={item} indice={indice} setIndicePerguntaVirada={setIndicePerguntaVirada}  />                    
                )          

               

            })}
        </>





    );
}


