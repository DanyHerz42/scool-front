import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Redirect } from 'react-router';
// import { useHistory } from 'react-router-dom';

import foto1 from '../../../assets/profilePicture/foto1.jpg';

export const MenuLeftClass = (props) => {
    // const { key, datacard } = props;
    // const History = useHistory();

    // const openClass = () => {
    //     // History.push("/detallesDeClase")
    //     History.push({
    //         pathname: `/clase/${datacard.id_class}/flujoDeTrabajo`,
    //         state: {
    //             key,
    //             datacard
    //         },
    //     });
    // }
    return (
<       div className="menu_class">
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
                <NavLink to="./flujoDeTrabajo" activeClassName="activeBtn">Flujo de trabajo</NavLink>
                <NavLink to="./integrantes" activeClassName="activeBtn">Integrantes</NavLink>
                <NavLink to="./calendario" activeClassName="activeBtn">Calendario de clase</NavLink>
            </div>
        </div>
    )
}