import React, { useContext } from 'react'
import { CalendarCardTeacher } from '../../components/ui/Calendar/CalendarCardTeacher';
import { Calendar } from '../../components/ui/Calendar/Calendar';
import { Chat } from '../../components/ui/chat/Chat';
import { Header } from '../../components/ui/Header';
import { MenuTeacher } from '../../components/ui/MenuTeacher';
import { MenuTeacherShort } from '../../components/ui/MenuTeacherShort';
import { UiContext } from '../../context/uiContext';

export const CalendarTeacherScreen = () => {

    const { menu } = useContext(UiContext);

    return (
        <div className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <MenuTeacher /> : <MenuTeacherShort />
            }
            {/* <div className="header__container">Title</div> */}
            <Header title="Calendario" />
            <Chat />
            <div className="container-calendar">
                <CalendarCardTeacher />
                <Calendar />
            </div>
        </div>
    )
}
