import React from 'react'
import { useForm } from "react-hook-form";
import { postEnrrollClass } from '../../services/class';
import Swal from 'sweetalert2';

export const ModalCode = ({openSuccessClass}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const onSubmit = data => console.log(data);
    const onSubmit = async (codeClass) => {
        // console.log(codeClass.codeClass);
        const {message} = await postEnrrollClass(codeClass.codeClass)
        // console.log(data);
        if (message === 'Alumno registrado exitosamente') {
            openSuccessClass()
        } else {
            Swal.fire('Error', 'No exite la clase', 'error');
        }
    };    
    // console.log(watch("example"));

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