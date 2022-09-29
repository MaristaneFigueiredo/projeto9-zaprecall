
import PerguntaFechada from "./PerguntaFechada";

export default function ListaPerguntas({ deck }) {
    console.log('deck', deck)
    // console.log('deck.Pergunta',deck[0].Pergunta)
    return (

        <>
            {deck.map((item, indice) => {
                return
                
                     <PerguntaFechada key={indice} pergunta={item} indice={indice} />
                
                   
                    
                

                // <PerguntaFechada key={index} pergunta={deck[index].Pergunta} indice={index}

            })}
        </>




    );
}