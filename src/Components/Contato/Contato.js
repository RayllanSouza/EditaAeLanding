import React from 'react';
import '../../Resources/Styles/Contato.css'
import axios from 'axios';

function Contato() {

  function sendMail(e){
    e.preventDefault();
    const nome = e.target[0].value;
    const email = e.target[1].value;
    const discord = e.target[2].value;
    const mensagem = e.target[3].value;
    const inputs = {
      nome: nome,
      email: email,
      discord: discord,
      mensagem: mensagem
    }

    axios.post('https://editaaedesign.com.br/Sendmail/Index.php', inputs).then((result)=>{
      console.log(result)
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  return (
    <div id="orçamento" className='contato'>
        <div className='contato-content'>
        <h1>Solicitar Orçamento</h1>
            <form onSubmit={sendMail} name="form1">
                <input id="nome" name='nome' placeholder='Nome' required/>
                <input id="email" name='email' placeholder='Email' required/>
                <input id="discord" name='discord' placeholder='Discord' required/>
                <textarea id="mensagem" nome="mensagem" placeholder='Mensagem' required/>
                <button className='button-contato' type='submit'>Enviar</button>
            </form>
        </div>
    </div>
  );
}

export default Contato;