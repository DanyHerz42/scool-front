import React from 'react'
import { useForm } from "react-hook-form";
// import ReactDOM from "react-dom";

import SearchIcon from '@material-ui/icons/Search';

export const SearchOfClass = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const onSubmit = data => console.log(data);
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    
    console.log(watch("example"));

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="search_class" name="buscador" placeholder="Buscar"
                {...register("buscador", { required: true })} />
                
                <button type="primary" className="btn_search">
                    {/* onClick={validarBuscador} */}
                    <SearchIcon/>
                </button>

                {errors?.buscador?.type === "required" &&  
                    <div className="alerta errorSearch">Campo vacío</div>}
            </form>
        </div>
        
    )
}