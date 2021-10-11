import React from 'react';
import Logo from '../../assets/imgs/logo.png'
import Letras from '../../assets/imgs/letras.png'

export const LoadingApp = () => {
    return (
        <div className="container-loadingApp">
            <div className="container-loadingApp_imgs">
                <img src={Logo} alt="logo main" />
                <img src={Letras} alt="logo main" />
            </div>
            <span>Espere...</span>
        </div>
    )
}
