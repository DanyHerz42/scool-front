import React, { useContext, useState } from 'react'
import { UiContext } from '../context/uiContext'
import { Menu } from './ui/Menu'
import { MenuShort } from './ui/MenuShort';
import { Header } from './ui/Header';
import { Chat } from './ui/Chat';

import { ClassStudent } from './info/ClassStudent';
import { SearchOfClass } from './info/SearchOfClass';
import { EnrollClass } from './info/EnrollClass'

export const HomeScreen = () => {
    const {menu} = useContext(UiContext);

    const apiInfo= [
        {
            "name_class": "Matemáticas",
            "color_class": "#09AD2A",
            "Profile_picture": "../../assets/profilePicture/foto1.jpg",
            "next_class": "2004-07-16T05:00:00.000Z",
            "name_teacher": "Roberto"
        },
        {
            "name_class": "Español",
            "color_class": "#08DD4A",
            "Profile_picture": "../../assets/profilePicture/foto1.jpg",
            "next_class": "2004-07-16T05:00:00.000Z",
            "name_teacher": "Roberto"
        }
        ,
        {
            "name_class": "Estructura de datos",
            "color_class": "#07CD4A",
            "Profile_picture": "../../assets/profilePicture/foto1.jpg",
            "next_class": "2004-07-16T05:00:00.000Z",
            "name_teacher": "Roberto"
        },
        {
            "name_class": "Metodologías Agiles",
            "color_class": "#16AE4A",
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
            {/* <div className="chat__container">Chat</div> */}
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
