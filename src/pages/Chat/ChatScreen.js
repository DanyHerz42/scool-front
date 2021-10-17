import React, { useContext } from 'react'
import { UiContext } from '../../context/uiContext';
import { Header } from '../../components/ui/Header';
import { Menu } from '../../components/ui/Menu'
import { MenuShort } from '../../components/ui/MenuShort';
import { Chat } from '../../components/ui/chat/Chat';
import { ChatCard } from '../../components/ui/chat/ChatCard';
import { ChatMessages } from '../../components/ui/chat/ChatMessages';

export const ChatScreen = () => {
    const {menu} = useContext(UiContext);


    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Chat" />
            <Chat />
            <div className="container-chat">
                <ChatCard />
                <ChatMessages />
            </div>
        </div>
    )
}
