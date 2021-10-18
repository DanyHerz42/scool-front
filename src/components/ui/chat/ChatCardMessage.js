import React from 'react';
import LogoConversation from '../../../assets/imgs/conversation.png';

export const ChatCardMessage = () => {
    return (
        <div className="chat__container-chatCardMessage">
            <h2>Inicia conversación</h2>
            <img src={LogoConversation} alt="logo conversación" />
            <p>Inicia una conversación para mandar mensajes a tus profesores.</p>
        </div>
    )
}
