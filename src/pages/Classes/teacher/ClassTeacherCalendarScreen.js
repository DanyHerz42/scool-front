import React, { useContext } from 'react'
import { Chat } from '../../../components/ui/chat/Chat';
import { ClassCalendar } from '../../../components/ui/classes/ClassCalendar';
import { ClassCardTeacher } from '../../../components/ui/classes/ClassCardTeacher';
import { Header } from '../../../components/ui/Header';
import { MenuTeacher } from '../../../components/ui/MenuTeacher';
import { MenuTeacherShort } from '../../../components/ui/MenuTeacherShort';
import { UiContext } from '../../../context/uiContext';
export const ClassTeacherCalendarScreen = () => {
    const {menu} = useContext(UiContext);

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
            {
                menu.menuOpen ? <MenuTeacher /> : <MenuTeacherShort />
            }
            <Header title="Actividades"/>
            <Chat />
            <div className="container-class_teacher">
               
                <ClassCardTeacher />
                <ClassCalendar />
            </div>
        </div>
    )
}
