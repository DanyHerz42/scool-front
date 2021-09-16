import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { UiContext } from '../../context/uiContext';
import { types } from '../../types/types';


export const Menu = () => {

    let location = useLocation();
  
    const {dispatch} = useContext(UiContext);

    const handleMenuShort = () => {
    
        dispatch({
            type: types.uiCloseMenu
        })
    }

    return (
        <div className="menu__container">
            <div className="menu__icon" onClick={handleMenuShort}>
            <ArrowBackIosIcon className="menu__icon-burger" />
            </div>

            <nav className="menu__nav">
                <ul>
                    <li className={location.pathname === '/' ? 'menu__active' : ''}>
                        <NavLink to="/">Mis clases</NavLink>
                     </li>   
                    <li className={location.pathname === '/calendar' ? 'menu__active' : ''}>
                        <NavLink to="/calendar">Calendario</NavLink>
                     </li>   
                    <li className={location.pathname === '/chat' ? 'menu__active' : ''}>
                        <NavLink to="/chat">Chat</NavLink>
                     </li>   
                    <li className={location.pathname === '/goals' ? 'menu__active' : ''}>
                        <NavLink to="/goals">Logros</NavLink>
                     </li>   
                    <li className={location.pathname === '/autodidact' ? 'menu__active' : ''}>
                        <NavLink to="/autodidact">Autodidacta</NavLink>
                     </li>   
                     <div className="menu__separator"></div> 
                    <li className={location.pathname === '/homeworks' ? 'menu__active' : ''}>
                        <NavLink to="/homeworks">Tareas</NavLink>
                     </li> 
                </ul>
            </nav>
            <div className="menu__logout">
                <MeetingRoomIcon />
                <p>Cerrar sesión</p>
            </div>
        </div>
    )
}
