import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons//Menu';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { UiContext } from '../../context/uiContext';
import { types } from '../../types/types';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ChatIcon from '@material-ui/icons/Chat';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

export const Menu = () => {

    let location = useLocation();

    const { dispatch } = useContext(UiContext);

    const handleMenuShort = () => {

        dispatch({
            type: types.uiCloseMenu
        })
    }

    return (
        <div className="menu__container">
            <div className="menu__icon" onClick={handleMenuShort}>
                <MenuIcon className="menu__icon-burger" />
            </div>

            <nav className="menu__nav">
                <ul>
                    <li className={location.pathname === '/' ? 'menu__active' : ''}>
                        <NavLink exact to="/" className="menu__item-container" activeClassName="menu__active">
                            <MenuBookIcon className="menu__item-icon" />
                            <p>Mis clases</p>
                        </NavLink>
                    </li>
                    <li className={location.pathname === '/calendar' ? 'menu__active' : ''}>
                        <NavLink exact to="/calendar" className="menu__item-container" activeClassName="menu__active">
                             <EventNoteIcon className="menu__item-icon" />
                            <p>Calendario</p>
                        </NavLink>
                    </li>
                    <li className={location.pathname === '/chat' ? 'menu__active' : ''}>
                        <NavLink exact to="/chat" className="menu__item-container" activeClassName="menu__active">
                             <ChatIcon className="menu__item-icon"/>
                            <p>Chat</p>
                        </NavLink>
                    </li>
                    <li className={location.pathname === '/goals' ? 'menu__active' : ''}>
                        <NavLink to="/goals" className="menu__item-container" activeClassName="menu__active">
                             <CardGiftcardIcon />
                            <p>Logros</p>
                        </NavLink>
                    </li>
                    <li className={location.pathname === '/autodidact' ? 'menu__active' : ''}>
                        <NavLink to="/autodidact" className="menu__item-container" activeClassName="menu__active">
                            <LocalLibraryIcon />
                            <p>Autodidacta</p>
                        </NavLink>
                    </li>
                    

                    <li className={location.pathname === '/homeworks' ? 'menu__active' : ''}>
                        <NavLink to="/homeworks" className="menu__item-container" activeClassName="menu__active">
                             <FormatListBulletedIcon />
                            <p>Tareas</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* <nav className="menu__nav">
                <ul>
                    <li className="contenedor__test">
                  
                        <p>Lol</p>
                        <p>Mis clases</p>
                    </li>
                    <li className="contenedor__test">
                        <EventNoteIcon/>
                        <p>Calendario</p>
                    </li>
                </ul>
            </nav> */}
            <div className="menu__logout">
                <MeetingRoomIcon />
                <p>Cerrar sesión</p>
            </div>
        </div>
    )
}
