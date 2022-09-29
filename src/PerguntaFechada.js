

// export default function PerguntaFechada({pergunta, indice}){
    export default function PerguntaFechada({pergunta, indice}){
    // console.log('pergunta, indice',pergunta, indice)
    console.log('PerguntaFechada- indice', indice)
    return(

       <>
            <button className="pergunta-fechada">
                <p>
                    {pergunta}
                </p>
            
                {/* `pergunta ${indice + 1}` */}
            </button>
       </>

       
    );
}