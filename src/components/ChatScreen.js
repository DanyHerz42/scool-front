import React, { useContext } from 'react'
import { UiContext } from '../context/uiContext';
import { Header } from './ui/Header';
import { Menu } from './ui/Menu'
import { MenuShort } from './ui/MenuShort';

export const ChatScreen = () => {
    const {menu} = useContext(UiContext);


    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Chat" />
            <div className="chat__container">Chat</div>
            <div className="container-info">Info</div>
        </div>
    )
}
