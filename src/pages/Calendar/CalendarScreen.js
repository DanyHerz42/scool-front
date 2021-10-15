import React, { useContext } from 'react'
import { Calendar } from '../../components/ui/Calendar/Calendar';
import { CalendarCard } from '../../components/ui/Calendar/CalendarCard';
import { Chat } from '../../components/ui/chat/Chat';
import { Header } from '../../components/ui/Header';
import { Menu } from '../../components/ui/Menu';
import { MenuShort } from '../../components/ui/MenuShort';
import { UiContext } from '../../context/uiContext';


export const CalendarScreen = () => {

    const {menu} = useContext(UiContext);

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            {/* <div className="header__container">Title</div> */}
            <Header title="Calendario" />
            <Chat />
            <div className="container-calendar">
                <CalendarCard />
                <Calendar />
            </div>
        </div>
    )
}
