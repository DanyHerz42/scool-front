import React, { useContext } from 'react'
import { UiContext } from '../../context/uiContext';
import { Header } from '../../components/ui/Header';
import { Menu } from '../../components/ui/Menu'
import { MenuShort } from '../../components/ui/MenuShort';
import { Chat } from '../../components/ui/chat/Chat';

export const ChatScreen = () => {
    const {menu} = useContext(UiContext);


    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Chat" />
            <Chat />
            <div className="container-info">Info</div>
        </div>
    )
}
