import React from 'react';
import '../../Resources/Styles/Sobre.css';
import logo_reg from '../../Resources/Images/logo_sobre.png'
// import { Container } from './styles';

function Sobre() {
  return (
    <div id="sobre" className='sobre'>
        <p>Conheça nossa historia :)</p>
        <div className='sobre-content'>
            <img alt="Logo Editae Sobre uma Regua" src={logo_reg}/>
            <div className='text-sobre'>
                <h1>Sobre nós</h1>
                <p>Somos a Edita Aê, uma empresa que nunca pensou em ser levada a sério, até... ser levada! hahaha!</p>
                <p></p>
                <p>Tudo começou em uma manhã de novembro em 2016, na sala de aula, período de projetos  onde teríamos que entregar um vídeo produzindo algo em inglês, então como o único do meu grupo que tinha a mínima noção de edição e um computador que se aguenta uma edição, lá fui eu editar esse vídeo, como primeira equipe pronta tivemos semanas de “descanso”, e diante disso outras equipes me procuraram para editar outros vídeos, foi aí que comecei a faturar com edição, recebendo lá meus <span>15 reais por vídeo</span>. Conhecido por João eu achava meu nome muito “comum” então nomeei minha empresa com a frase que eu mais escultei na minha vida: <span>“Edita Aê!”</span>.</p>
            </div>
        </div>
    </div>
  );
}

export default Sobre;