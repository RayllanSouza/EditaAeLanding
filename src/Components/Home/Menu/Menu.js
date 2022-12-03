import React, { useEffect } from 'react';
import '../../../Resources/Styles/Menu.css'
import logo from '../../../Resources/Images/Logo.png'
import seta from '../../../Resources/Images/seta.svg';
// import { Container } from './styles';

function Menu() {

  useEffect(()=>{
    const buttonback = document.getElementById("back-to-top")
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 200){
        buttonback.style.display = 'block';
      }else{
        buttonback.style.display = 'none';
      }
    })
    buttonback.addEventListener('click',()=>{
      window.scrollTo(0,0);
    })
  },[])


  return (
    <div className='menu'>
        <ul className='menu-content'>
            <li><img alt='Logo Editaae' src={logo}/></li>
            <input type="checkbox" id="checkbox" className="checkbox"/>
            <label htmlFor="checkbox" className="label-menu text-white">
            <span className="hamburguer"></span>
            </label>
            <ul className='links'>
                <li className='link'><a href='#sobre'>SOBRE NÓS</a></li>
                <li className='link'><a href='#equipe'>EQUIPE</a></li>
                <li className='link'><a target="_blank" rel="noreferrer" href='https://www.behance.net/editaaedesign'>PORTFOLIO</a></li>
                <li className='link'><a href='#orçamento'>CONTATO</a></li>
                <li className='link'><a className='link-button' target="_blank" rel="noreferrer" href='https://wa.me/557191389731?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento'>SOLICITAR ORÇAMENTO</a></li>
            </ul>
        </ul>
        <div id="back-to-top" className='back-to-top'>
          <img alt="Voltar ao topo!" src={seta}/>
        </div>
    </div>
  );
}

export default Menu;