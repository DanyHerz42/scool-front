import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

export const ClassCardTeacher = () => {

    const {id} = useParams();
    return (
        <div className="classCard__container-teacher">
            <h2>Inglés avanzado</h2>
            <div className="classCard__img-container">
                <img src="/profile/student4.png" alt="img profile" />
            </div>
            <span>Profesor: Pedro</span>
            <span>Correo: pedro@gmail.com</span>
            <div className="classCard__separator"></div>
            <nav className="classCard__menu">
                <ul>
                    <li className="classCard__container-link">
                        <NavLink to={`/class/${id}/workflow`} activeStyle={{color: '#EA5A0B'}}>
                            Flujo de trabajo
                        </NavLink>

                    </li>
                    <li >
                        <NavLink to={`/class/${id}/integrants`} activeStyle={{color: '#EA5A0B'}}>
                            Integrantes
                            </NavLink>

                    </li>
                    <li>
                        <NavLink to={`/class/${id}/calendar`} activeStyle={{color: '#EA5A0B'}}>
                            Calendario
                        </NavLink>

                    </li>
                </ul>
            </nav>
        </div>
    )
}

