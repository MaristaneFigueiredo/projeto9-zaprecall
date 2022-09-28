import logo from './assets/img/logo-pequeno.png'

import deck from './deck'
import ListaPerguntas from "./ListaPerguntas";
;

export default function App() {
    return (
        // <h1>teste</h1>

        <div className="screen-container">
            <div className="logo-container">
                <img src={logo} alt="Imagem logo" />
                <h1 className="logo-container">ZapRecall</h1>
            </div>

            <div>
                <ListaPerguntas deck={deck}/>
            </div>

        




        </div>
    );
}