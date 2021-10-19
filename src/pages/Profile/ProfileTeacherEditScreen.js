import React, { useContext } from 'react'
import { Chat } from '../../components/ui/chat/Chat';
import { Header } from '../../components/ui/Header';
import { MenuTeacher } from '../../components/ui/MenuTeacher';
import { MenuTeacherShort } from '../../components/ui/MenuTeacherShort';
import { UiContext } from '../../context/uiContext';
import { CreateProfileTeacher } from '../../components/ui/profile/CreateProfileTeacher';


export const ProfileTeacherEditScreen = ({history}) => {

    const {menu} = useContext(UiContext);
 
    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
            {
                menu.menuOpen ? <MenuTeacher /> : <MenuTeacherShort />
            }
            <Header title="Mis clases"/>
            <Chat />
            <div className="container-profile">
                {/* <EditProfile history={history} /> */}
                <CreateProfileTeacher history={history} />
            </div>
        </div>
    )
}
