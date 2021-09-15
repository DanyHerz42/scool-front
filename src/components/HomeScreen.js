import React from 'react'
import { Menu } from './ui/Menu'

export const HomeScreen = () => {
    return (
        <>
            {/* <div className="menu__container">Menú</div> */}
            <Menu />
            <div className="header__container">Title</div>
            <div className="chat__container">Chat</div>
            <div className="container-info">Info</div>
        </>
    )
}
