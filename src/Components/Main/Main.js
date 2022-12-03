import React from 'react';
import Contato from '../Contato/Contato';
import Equipe from '../Equipe/Equipe';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Loading from '../Loading/Loading';
import Promotion from '../Promotion/Promotion';
import Sobre from '../Sobre/Sobre';

// import { Container } from './styles';

function Main() {
  const promo = 0;
  return (
    <>
        <Loading />
        {promo === 1 ? <Promotion />:null}
        <Home/>
        <Sobre/>
        <Equipe/>
        <Contato/>
        <Footer/>
    </>
  );
}

export default Main;