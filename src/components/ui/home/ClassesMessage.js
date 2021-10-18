import React from 'react'
import LogoClass from '../../../assets/imgs/class.png'

export const ClassesMessage = () => {
    return (
        <div className="classes__message-container">
            <h2>No has creado ninguna clase</h2>
            <img src={LogoClass} alt="logo class"/>
            <p>Crea una clase para comenzar con tus actividades</p>
        </div>
    )
}
