import React from 'react'
import { Menu } from './ui/Menu'

export const ChatScreen = () => {
    return (
        <>
            <Menu />
            <div className="header__container">Title</div>
            <div className="chat__container">Chat</div>
            <div className="container-info">Info</div>
        </>
    )
}
