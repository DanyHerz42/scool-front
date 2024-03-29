import React, { useContext, useState } from 'react'
import { UiContext } from '../../context/uiContext';
import { Header } from '../../components/ui/Header';
import { Menu } from '../../components/ui/Menu'
import { MenuShort } from '../../components/ui/MenuShort';
import { Chat } from '../../components/ui/chat/Chat';
import { ChatCard } from '../../components/ui/chat/ChatCard';
import { ChatMessages } from '../../components/ui/chat/ChatMessages';
import { ChatCardMessage } from '../../components/ui/chat/ChatCardMessage';

export const ChatScreen = () => {
    const {menu} = useContext(UiContext);

    const [showChat, setShowChat] = useState(false)

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Chat" />
            <Chat />
            <div className="container-chat">
                <ChatCard setShowChat={setShowChat} />
                {
                    showChat ? <ChatMessages /> : <ChatCardMessage />
                }
                {/* <ChatCardMessage /> */}
                {/* <ChatMessages /> */}
            </div>
        </div>
    )
}
