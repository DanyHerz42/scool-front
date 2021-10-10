import React from 'react'
// import { useForm } from "react-hook-form";

export const EnrollClass = () => {
    const toggle = () => {
        console.log("hola perros");
    }

    return (
        <div>
            <button className="new_class" onClick={toggle}>Nueva Clase</button>
        </div>
        
    )
}