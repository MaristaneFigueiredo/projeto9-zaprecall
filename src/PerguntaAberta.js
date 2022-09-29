import { useState } from "react";

import iconeVirar from './assets/img/setinha.png'

export default function PerguntaAberta({ pergunta }) {
    console.log('PerguntaAberta -pergunta',pergunta)
    const [respostaVirada, setRespostaVirada] = useState(false)

    
        if (respostaVirada === false) {
            return (
                <div className="pergunta-aberta">
                    {(respostaVirada === false) ? pergunta.Pergunta : pergunta.Resposta}
                    <img src={iconeVirar} onClick={() => setRespostaVirada(true)} />
                </div>)

        } else {
            return (
                <div className="pergunta-aberta">
                    {(respostaVirada === false) ? pergunta.Pergunta : pergunta.Resposta}                    
                </div>)


        }
    


}