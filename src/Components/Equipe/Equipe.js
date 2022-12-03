import React from 'react';
import j from '../../Resources/Images/joao.png';
import r from '../../Resources/Images/rayllan.png';
import g from '../../Resources/Images/gustavo.png';
import '../../Resources/Styles/Equipe.css';

function Equipe() {
  return (
    <div id="equipe" className='equipe'>
        <h1>Equipe</h1>
        <div className='equipe-cards'>
            <img alt='Gustavo, Designer aprendiz, atendente e grande aliado a empresa. Presente desde 2021.' src={g}/>
            <img alt='Joao Pedro, desenvolvedor Front End, CEO da empresa.' src={j}/>
            <img alt='Rayllan Souza, Desenvolvedor Full Stack, novo aliado, frente da consultoria de programação. Presente desde 2022.' src={r}/>
        </div>
    </div>
  );
}

export default Equipe;