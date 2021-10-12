import React, { useContext, useState } from 'react'
import { UiContext } from '../context/uiContext'
import { Menu } from './ui/Menu'
import { MenuShort } from './ui/MenuShort';
import { Header } from './ui/Header';


import { ClassStudent } from './info/ClassStudent';
import { SearchOfClass } from './info/SearchOfClass';
import { EnrollClass } from './info/EnrollClass'
import { Chat } from './ui/chat/Chat';

export const HomeScreen = () => {
    const {menu} = useContext(UiContext);

    const apiInfo= [
        {
            "name_class": "Matematicas",
            "color_class": "#09AD2A",
            "Profile_picture": "../../assets/profilePicture/foto1.jpg",
            "next_class": "2004-07-16T05:00:00.000Z",
            "name_teacher": "Roberto"
        },
        {
            "name_class": "Matematicas2",
            "color_class": "#09AD2A",
            "Profile_picture": "../../assets/profilePicture/foto1.jpg",
            "next_class": "2004-07-16T05:00:00.000Z",
            "name_teacher": "Roberto"
        }
    ];

    const [dataCardsClassInfo, setdataCardsClassInfo] = useState(apiInfo);

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Mis clases"/>
            <Chat />
            <div className="container-info">
                <div className="head-info">
                    <EnrollClass />
                    <SearchOfClass/>
                </div>
                <div className="container-classes">
                    {dataCardsClassInfo.map((datacard) => (
                            <ClassStudent
                                datacard={datacard}
                                key={datacard.name_class}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}
