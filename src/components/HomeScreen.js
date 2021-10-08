import React, { useContext } from 'react'
import { UiContext } from '../context/uiContext'
import { Menu } from './ui/Menu'
import { MenuShort } from './ui/MenuShort';
import { Header } from './ui/Header';
import { Chat } from './ui/Chat';


export const HomeScreen = () => {

    const {menu} = useContext(UiContext);
    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
           
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Mis clases"/>
            {/* <div className="chat__container">Chat</div> */}
            <Chat />
            <div className="container-info">
                <div className="container-classes">
                    <div className="container-class">
                        <div className="container-class-head">
                            {/* <img className="img-carpeta"
                            src="mdn-logo-sm.png" alt="carpetaClase"/> */}
                            <div className="carpeta">
                                <svg width="200px" height="200px" className="icon--plus">
                                        <polygon fill="#f0ad4e" stroke="" stroke-width="4px" 
                                        points="30 75, 30 25, 60 25, 80 40, 170 40, 170 75" />
                                        <polygon fill="blue" stroke="" stroke-width="4px" 
                                        points="45 68, 130 25, 155 68" />
                                        <polygon fill="#f0ad4e" stroke="" stroke-width="4px"
                                        points="27 155, 22 65, 177 65, 172 155" />
                                        <text x="45" y="115" font-family="Verdana"
                                            font-size="16" fill="white">
                                            Prof. Guardiola
                                        </text>
                                </svg>
                            </div>
                            <img className="fotoPerfil-profe"
                            src="mdn-logo-sm.png" alt="fotoPerfil"/>
                        </div>
                        <div className="container-class-body">
                            <p className="name-class"></p>
                            <p>Próxima clase:</p>
                            <p className="nextClass"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
