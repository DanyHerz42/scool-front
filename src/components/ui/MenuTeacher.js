import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom';


import MenuIcon from '@material-ui/icons//Menu';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ChatIcon from '@material-ui/icons/Chat';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { AuthContext } from '../../context/authContext';
import { UiContext } from '../../context/uiContext';
import { types } from '../../types/types';

export const MenuTeacher = () => {
    let location = useLocation();

    const { dispatch } = useContext(UiContext);
    const {dispatch: dispatchContext} = useContext(AuthContext)
    
    const handleMenuShort = () => {

        dispatch({
            type: types.uiCloseMenu
        })
    }

    const  handleStartLogout = () => {
        localStorage.clear();
        dispatchContext(logout())
    }

    const logout = () => ({type: types.authLogout})

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
                            <ChatIcon className="menu__item-icon" />
                            <p>Chat</p>
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
            <div className="menu__logout" onClick={handleStartLogout}>
                <MeetingRoomIcon />
                <p>Cerrar sesión</p>
            </div>
        </div>
    )
}
