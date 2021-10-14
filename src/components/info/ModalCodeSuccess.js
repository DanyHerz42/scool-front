import React from 'react'
import { useForm } from "react-hook-form";

import foto from '../../assets/profilePicture/foto1.jpg'

export const ModalCodeSuccess = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const onSubmit = data => console.log(data);
    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data));
    // };
    
    console.log(watch("example"));

    return (
        <div>
            <p className="text_center_modal">
                Listo! quedaste inscrito en la clase:
            </p>
            <p className="largeText text_center_modal">Ingles V{}</p>
            <div className="displayFlexAround">
                <p className="largeText text_center_modal">Con: Profe. Ronaldo {}</p>
                <img className="imgProfile" src={foto} alt="fotoPerfil"/>
            </div>
            <button type="primary" className="btnAcept_modal">
                Continuar
            </button>
        </div>
    )
}