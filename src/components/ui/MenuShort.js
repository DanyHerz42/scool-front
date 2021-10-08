import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UiContext } from '../../context/uiContext';
import { types } from '../../types/types';

// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ClearIcon from '@material-ui/icons/Clear';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ChatIcon from '@material-ui/icons/Chat';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


export const MenuShort = () => {

    const {dispatch} = useContext(UiContext);

    const handleMenuComplete = () => {
        dispatch({
            type: types.uiOpenMenu
        })
    }

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
                        <NavLink to="/goals"><CardGiftcardIcon /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/autodidact"><LocalLibraryIcon /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/homeworks"><FormatListBulletedIcon /></NavLink>
                    </li>
                </ul>
            </nav>

            <div className="menu-short__logout">
                <MeetingRoomIcon />
            </div>

        </div>
    )
}
