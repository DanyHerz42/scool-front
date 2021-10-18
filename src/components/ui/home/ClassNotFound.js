import React from 'react';
import LogoNotFound from '../../../assets/imgs/sad.png';

export const ClassNotFound = () => {
    return (
        <div className="classes__message-container">
            <h2>No se encuentra</h2>
            <img src={LogoNotFound} alt="logo class" />
            <p>Intenta con otras palabras.</p>
        </div>
    )
}
