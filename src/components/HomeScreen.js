import React, { useContext } from 'react'
import { UiContext } from '../context/uiContext'
import { Menu } from './ui/Menu'
import { MenuShort } from './ui/MenuShort';
import { Header } from './ui/Header';
import { Chat } from './ui/Chat';


export const HomeScreen = () => {

    const {menu} = useContext(UiContext);
    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Mis clases"/>
            {/* <div className="chat__container">Chat</div> */}
            <Chat />
            <div className="container-info">
                <p>Info</p>
            </div>
        </div>
    )
}
