import React from 'react';
import Menu from './Menu/Menu';
import '../../Resources/Styles/Home.css'

// import { Container } from './styles';

function Home() {
  return (
    <div className='home' id="home">
        <Menu/>
        <div className='content-home'>
            <h1>
                Conheça a <span>MELHOR</span> loja
            </h1>
            <h1>
                para o seu <span>négocio online</span>!
            </h1>
        </div>
    </div>
  );
}

export default Home;