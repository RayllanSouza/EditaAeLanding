import React from 'react';
import logo from '../../Resources/Images/logo-branca.png';
import '../../Resources/Styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <h1>Todos os direitos reservados Edita Aê 2022</h1>
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/editaaedesign/'><img alt='logo edita ae' src={logo}/></a>          
        </div>
    </div>
  );
}

export default Footer;