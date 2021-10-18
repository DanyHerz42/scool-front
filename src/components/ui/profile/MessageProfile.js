import React from 'react'
import logoSad from '../../../assets/imgs/sad.png'

export const MessageProfile = ({history}) => {
    return (
        <div className="profile-message__container">
            <p className="profile-message__title">¡No has personalizado tu perfil!</p>
            <img className="profile-message__logo" src={logoSad} alt="logo sad" />
            <p className="profile-message__body">Crea tu perfil para poder personaliar tu foto y agrega una biografía para que todos las vean.</p>
         
            
            <button className="profile-message__button" onClick={() => history.push('/profile/edit')}>Crear</button>
           
        </div >
    )
}
