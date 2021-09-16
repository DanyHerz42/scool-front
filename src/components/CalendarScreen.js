import React, { useContext } from 'react'
import { UiContext } from '../context/uiContext';
import { Menu } from './ui/Menu'
import { MenuShort } from './ui/MenuShort';

export const CalendarScreen = () => {

    const {menu} = useContext(UiContext);

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <div className="header__container">Title</div>
            <div className="chat__container">Chat</div>
            <div className="container-info">Info</div>
        </div>
    )
}
