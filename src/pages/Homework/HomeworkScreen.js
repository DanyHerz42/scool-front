
import React, { useContext } from 'react'
import { Chat } from '../../components/ui/chat/Chat';
import { Header } from '../../components/ui/Header';
import { HomeworkStudent } from '../../components/ui/homework/HomeworkStudent';
import { Menu } from '../../components/ui/Menu';
import { MenuShort } from '../../components/ui/MenuShort';
import { UiContext } from '../../context/uiContext';

export const HomeworkScreen = () => {

    const {menu} = useContext(UiContext);

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Actividades"/>
            <Chat />
            <div className="container-homework">
                {/* <EditProfile history={history} /> */}
                <HomeworkStudent />
            </div>
        </div>
    )
}
