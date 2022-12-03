import React, { useEffect } from 'react';
import logo from '../../Resources/Images/Logo.png'
import '../../Resources/Styles/Loading.css'
function Loading() {    
    useEffect(()=>{
        document.querySelector("html").style.overflow = "hidden";
    },[])
    setTimeout(()=>{
        document.querySelector('.loading').classList.add("d-none")
        document.querySelector("html").style.overflow = "auto";
    },3500)
  return (
    <div className='loading'>
        <div className='loading-content'>
            <img alt='Logo Edita ae design' src={logo}/>
            <div className='loading-animation'>
            </div>
        </div>
    </div>
  );
}

export default Loading;