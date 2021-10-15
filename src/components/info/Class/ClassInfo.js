import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context/authContext';
import { UiContext } from '../../../context/uiContext';
import { Chat } from '../../ui/chat/Chat';
import { Header } from '../../ui/Header';
import { Menu } from '../../ui/Menu';
import { MenuShort } from '../../ui/MenuShort';

import foto1 from './../../../assets/profilePicture/foto1.jpg'
import { ClassCalendar } from './classCalendar';
import { Integrants } from './Integrants';
import { WorkFlow } from './workFlow';


export const Class = (props) => {
    const {menu} = useContext(UiContext);
    const { user } = useContext(AuthContext);

    const [indicator, setIndicator] = useState(1);


    // const { datacard } = props;
    // console.log(datacard);

    return (
        <div  className={menu.menuOpen ? 'container-main-complete' : 'container-main-short'}>
            {
                menu.menuOpen ? <Menu /> : <MenuShort />
            }
            <Header title="Mis clases"/>
            <Chat />
            <div className="container-info">
                <div className="containerFlex">
                    <div className="menu_class">
                        <div className="headMenu_sideLeft">
                            <div className="headTop">
                                <div className="carpetaSmall">
                                    <svg className="icon--plus">
                                        <polygon fill="#000"
                                            points="45 85, 45 40, 70 40, 90 50, 125 50, 125 85" />
                                        <polygon fill="#A9D9FF"
                                            points="35 78, 110 40, 118 78" />
                                        <polygon fill="#000"
                                            points="45 105, 35 60, 135 60, 125 105" />
                                    </svg>
                                </div>
                                <p className="titleClass">Matematicas 5°K</p>
                            </div>
                            <p className="textMenuLeft">Profesor: Josep guardiola</p>
                            <p className="textMenuLeft">Correo: vrojas2@ucol.mx</p>
                            < img className="imgProfile"
                            src={foto1} alt="fotoPerfil"/>
                        </div>
                        <hr className="dividorMenu"/>
                        <div className="BodyMenu_sideLeft">
                            <button variant="primary" onClick={() => setIndicator(1)}>
                                Flujo de trabajo
                            </button>
                            <button variant="primary" onClick={() => setIndicator(2)}>
                                Integrantes
                            </button>
                            <button variant="primary" onClick={() => setIndicator(3)}>
                                Calendario de clase
                            </button>
                        </div>
                    </div>
                    <div className="containerInfoOFClass">
                        {indicator === 1 ? (
                            // <TableMovements
                                // movements={movements}
                                // setMovements={setMovements}
                                // dataTable={dataTable}
                            // ></TableMovements>
                            <WorkFlow />
                        ) : null}

                        {indicator === 2 ?  (

                            <Integrants />
                        ) : null}

                        {indicator === 3 ?  (

                            <ClassCalendar />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
