import { useState } from "react";
import seta from './assets/img/seta_play.png'
import PerguntaAberta from "./PerguntaAberta";


// export default function PerguntaFechada({pergunta, indice}){
export default function PerguntaFechada({ pergunta, indice, setIndicePerguntaVirada}) {
 
    const vPerguntaRecebida = pergunta;
    const [perguntaVirada, setPerguntaVirada] = useState()

    function abrirPergunta(pergunta, indice) {
        console.log('abrirPergunta-pergunta', pergunta)
        setPerguntaVirada(vPerguntaRecebida)
        setIndicePerguntaVirada(indice)

        return (<PerguntaAberta pergunta={pergunta} />)
    }

    return (
        <>
 

            {(!perguntaVirada ?
                <button className="pergunta-fechada" >

                    <p>
                        {`Pergunta ${indice + 1}`}
                    </p>
                    <img src={seta} alt="Imagem seta" onClick={() => abrirPergunta(pergunta, indice)} />

                </button> : <PerguntaAberta pergunta={pergunta} />)}


        </>


    );
}

