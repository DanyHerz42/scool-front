import React, { useContext } from 'react'
import { UiContext } from '../../context/uiContext';
import { Menu } from '../../components/ui/Menu'
import { MenuShort } from '../../components/ui/MenuShort';
import { Header } from '../../components/ui/Header';
import { Chat } from '../../components/ui/chat/Chat';

import { MenuLeftClass } from '../../components/info/Class/MenuLeftClass';
import { WorkFlow } from '../../components/info/Class/WorkFlo';


export const WorkFlowPage = () => {
    const {menu} = useContext(UiContext);

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Mis clases"/>
            <Chat />
            <div className="container-info">
                <div className="containerFlex">
                    <MenuLeftClass
                    />
                    <div className="containerInfoOFClass">
                        <WorkFlow/>
                    </div>
                </div>
            </div>
        </div>
    )
}
