import React from 'react'
// import { useForm } from "react-hook-form";
// import { postEnrrollClass } from '../../services/class';

// import { ModalCodeSuccess } from './ModalCodeSuccess'

export const ModalCode = ({openSuccessClass}) => {
    
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // // const onSubmit = data => console.log(data);
    // const onSubmit = async () => {
    //     // console.log(codeClass.codeClass);

    //     const data = await postEnrrollClass()
    //     console.log(data);

    //     openSuccessClass()
    //     // <h1>hola</h1>
    //     // <ModalCodeSuccess></ModalCodeSuccess>
        
    // };
    
    // console.log(watch("example"));

    return (
        <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <p className="text_center_modal">
                    Codigo Incorrecto
                </p>

                {/* <input className="input_Modal" placeholder="Escribe aquí"
                name="codeClass" {...register("codeClass", { required: true })} />
                {errors?.codeClass?.type === "required" &&  
                    <div className="alerta errorCodeClass">Campo vacío</div>} */}

                <button  className="btnAcept_modal" >
                    Ingresa un nuevo codigo nuevo
                </button>
            {/* </form> */}
        </div>
    )
}