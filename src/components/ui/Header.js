import React, { useContext } from 'react';
import Logo from '../../assets/imgs/logo.png';
import Letras from '../../assets/imgs/letras.png';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AuthContext } from '../../context/authContext';
import { NavLink } from 'react-router-dom';

export const Header = ({title}) => {

    const {user} = useContext(AuthContext);

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
                
                <span>{user.name}</span>
               
                <NotificationsNoneIcon />
                <NavLink activeClassName="header__profile-active" to="/profile">
                <AccountCircleIcon />
                </NavLink>
                
            </div>
        </div>
    )
}
