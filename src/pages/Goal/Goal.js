
import React, { useContext } from 'react'
import { Chat } from '../../components/ui/chat/Chat';
import { CardGoalInsignia } from '../../components/ui/Goal/CardGoalInsignia';
import { CardGoalProgress } from '../../components/ui/Goal/CardGoalProgress';
import { CardGoalStatus } from '../../components/ui/Goal/CardGoalStatus';
import { Header } from '../../components/ui/Header';
import { Menu } from '../../components/ui/Menu';
import { MenuShort } from '../../components/ui/MenuShort';
import { UiContext } from '../../context/uiContext';

export const Goal = () => {

    const { menu } = useContext(UiContext);


    return (
        <div className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>

            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Mis clases" />
            <Chat />
            <div className="container-goal">
                <CardGoalStatus />
                <div className="goal__container-data">
                    <CardGoalProgress />
                    <CardGoalInsignia />

                </div>
            </div>
        </div>
    )
}
