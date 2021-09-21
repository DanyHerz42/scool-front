import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import Letras from '../../assets/imgs/letras.png';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Header = ({title}) => {
    return (
        <div className="header__container">
            <div className="header__title">
                {title}
            </div>
            <div className="header__logo">
                <img src={Logo} alt="logo" />
                <img src={Letras} alt="logo" />
            </div>
            <div className="header__container-imgs">
                <NotificationsNoneIcon />
                <AccountCircleIcon />
                
            </div>
        </div>
    )
}
