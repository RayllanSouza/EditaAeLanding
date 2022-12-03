import React from 'react';
import promotion from '../../Resources/Images/promo.jpg'
import '../../Resources/Styles/Promotion.css';

function Promotion() {
  return  (
    <div className='promotion'>
        <a href='https://dsc.gg/editaae'><img alt="Promoção Hallowen" src={promotion} /></a>
    </div>
  );
}

export default Promotion;