import React from 'react';
import { Link } from 'react-router-dom/dist';
import '../../Resources/Styles/notfound.css';

function NotFound() {
  return (
        <div class="mainbox">
            <div className='error'>
                <h1 class="err">4</h1>
                <i class="far fa-question-circle"></i>
                <h1 class="err">4</h1>
            </div>
            <div class="msg">Parece que a pagina que voce procura não está mais ativa. <p>Volte para a <Link to="/">Pagina Principal</Link> Ou Entre no nosso <a href="https://dsc.gg/editaae" rel="noreferrer" target="_blank">Discord</a> e abra um ticket.</p></div>
        </div>
  );
}

export default NotFound;