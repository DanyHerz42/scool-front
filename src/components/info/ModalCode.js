import React from 'react'
import { useForm } from "react-hook-form";

import { ModalCodeSuccess } from './ModalCodeSuccess'

export const ModalCode = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const onSubmit = data => console.log(data);
    const onSubmit = (data) => {
        // alert(JSON.stringify(data));    
        // <h1>hola</h1>
        // <ModalCodeSuccess></ModalCodeSuccess>
        
    };
    
    console.log(watch("example"));

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text_center_modal">
                    Ingresa el código de clase proporcionado por tu profesor
                </p>

                <input className="input_Modal" placeholder="Escribe aquí"
                name="codeClass" {...register("codeClass", { required: true })} />
                {errors?.codeClass?.type === "required" &&  
                    <div className="alerta errorCodeClass">Campo vacío</div>}

                <button type="primary" className="btnAcept_modal">
                    Inscribirme
                </button>
            </form>
        </div>
    )
}