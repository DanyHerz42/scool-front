import React, {useContext} from 'react'
import { UiContext } from '../../context/uiContext';
import { NavLink } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ChatIcon from '@material-ui/icons/Chat';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { types } from '../../types/types';
import { AuthContext } from '../../context/authContext';

export const MenuTeacherShort = () => {
    const {dispatch} = useContext(UiContext);
    const {dispatch: dispatchContext} = useContext(AuthContext)

    const handleMenuComplete = () => {
        dispatch({
            type: types.uiOpenMenu
        })
    };

    const  handleStartLogout = () => {
        localStorage.clear();
        dispatchContext(logout())
    };

    const logout = () => ({type: types.authLogout});


    return (
        <div className="menu-short__container">
            <div className="menu-short__icon" onClick={handleMenuComplete}>
                <ClearIcon />
            </div>

            <nav className="menu-short__nav">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="menu-short__active"><MenuBookIcon /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendar" activeClassName="menu-short__active"><EventNoteIcon /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/chat" activeClassName="menu-short__active"><ChatIcon /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/homeworks"><FormatListBulletedIcon /></NavLink>
                    </li>
                </ul>
            </nav>

            <div className="menu-short__logout" onClick={handleStartLogout}>
                <MeetingRoomIcon />
            </div>

        </div>
    )
}
