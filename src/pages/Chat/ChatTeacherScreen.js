import React, { useContext, useState } from 'react'
import { Chat } from '../../components/ui/chat/Chat';
import { ChatCardMessage } from '../../components/ui/chat/ChatCardMessage';
import { ChatCardTeacher } from '../../components/ui/chat/ChatCardTeacher';
import { ChatMessages } from '../../components/ui/chat/ChatMessages';
import { Header } from '../../components/ui/Header';
import { MenuTeacher } from '../../components/ui/MenuTeacher';
import { MenuTeacherShort } from '../../components/ui/MenuTeacherShort';
import { UiContext } from '../../context/uiContext';

export const ChatTeacherScreen = () => {
    const {menu} = useContext(UiContext);

    const [showChat, setShowChat] = useState(false)

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <MenuTeacher /> : <MenuTeacherShort />
            }
            <Header title="Chat" />
            <Chat />
            <div className="container-chat">
                <ChatCardTeacher setShowChat={setShowChat} />
                {
                    showChat ? <ChatMessages /> : <ChatCardMessage />
                }
                {/* <ChatCardMessage /> */}
                {/* <ChatMessages /> */}
            </div>
        </div>
    )
}
