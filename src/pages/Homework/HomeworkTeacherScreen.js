import Chat from '@material-ui/icons/Chat';
import React, { useContext } from 'react'
import { Header } from '../../components/ui/Header';
import { HomeworkTeacher } from '../../components/ui/homework/HomeworkTeacher';
import { MenuTeacher } from '../../components/ui/MenuTeacher';
import { MenuTeacherShort } from '../../components/ui/MenuTeacherShort';
import { UiContext } from '../../context/uiContext';

export const HomeworkTeacherScreen = () => {
    const {menu} = useContext(UiContext);

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
            {
                menu.menuOpen ? <MenuTeacher /> : <MenuTeacherShort />
            }
            <Header title="Actividades"/>
            <Chat />
            <div className="container-homework">
                {/* <EditProfile history={history} /> */}
                <HomeworkTeacher />
            </div>
        </div>
    )
}
