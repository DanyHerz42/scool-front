import React, { useContext, useState } from 'react'

import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/authContext';
import { UseForm } from '../../../hooks/useForm';
import { createClass } from '../../../services/classes';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        // height: '800px',
        borderRadius: '10px',
        width: '400px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }
};

Modal.setAppElement('#root');

export const ClassesModal = ({ modalOpen, closeModal }) => {


    const initialForm = {
        name: '',
        cantAlumnos: '',
        description: '',
        color: 'Elige un color para tu clase',
        // cantPeriods: 1,

        namePeriod: '',
        period1Start: '',
        period2End: ''


    };

    const [formValues, handleInputChange, reset] = UseForm(initialForm);
    const { name, cantAlumnos, description, color, namePeriod, period1Start,  period2End} = formValues;

    const handleCreateClass = async (e) => {
        e.preventDefault();
        if (!name || !cantAlumnos || !description || color == 'Elige un color para tu clase' || !namePeriod ) {

            Swal.fire('Error', 'Completa los campos correctamente', 'error')
        } else {
            const data = await createClass(name, cantAlumnos, description, color);
            console.log(data);
        }
        // console.log(formValues);

    }

    // const resetModal = () => {
    //     closeModal();
    //     reset()
    // }

    // const options = () => {
    //     if (cantPeriods == 1) {
    //         return (
    //             <>
    //                 <input type="text" placeholder="Nombre del periodo" />
    //                 <input type="datetime-local" />
    //                 <input type="datetime-local" />
    //             </>
    //         )
    //     } else if (cantPeriods == 2) {
    //         return (
    //             <>
    //                 <input type="text" placeholder="Nombre del periodo" />
    //                 <input type="datetime-local" />
    //                 <input type="datetime-local" />
    //                 <input type="text" placeholder="Nombre del periodo" />
    //                 <input type="datetime-local" />
    //                 <input type="datetime-local" />
    //             </>
    //         )
    //     } else {
    //         return (
    //             <>
    //                 <input type="text" placeholder="Nombre del periodo" />
    //                 <input type="datetime-local" />
    //                 <input type="datetime-local" />
    //                 <input type="text" placeholder="Nombre del periodo" />
    //                 <input type="datetime-local" />
    //                 <input type="datetime-local" />
    //                 <input type="text" placeholder="Nombre del periodo" />
    //                 <input type="datetime-local" />
    //                 <input type="datetime-local" />
    //             </>
    //         )
    //     }
    // }

    return (
        <div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
            // className="modal"
            // overlayClassName="modal-fondo"
            >
                <div className="classes__container-createClass">
                    <h1>Crear clase</h1>
                    <hr />
                    <form className="classes__form-createClass" onSubmit={handleCreateClass}>
                        <input name="name" type="text" placeholder="Nombre de la clase" autoComplete="off" value={name} onChange={handleInputChange} />
                        <input name="cantAlumnos" type="number" placeholder="Cantidad de alumnos" autoComplete="off" value={cantAlumnos} onChange={handleInputChange} />
                        <textarea name="description" placeholder="Descripción de la materia" autoComplete="off" value={description} onChange={handleInputChange} />
                        <select name="color" onChange={handleInputChange}>
                            <option>Elige un color para tu clase</option>
                            <option value="#e31764">Rojo</option>
                            <option value="#dfb7ed">Lila</option>
                            <option value="#988ae6">Morado</option>
                            <option value="#98ff9b">Verde</option>
                            <option value="#089bff">Azul</option>
                        </select>
                        <input type="text" name="namePeriod" placeholder="Nombre del periodo" value={namePeriod} onChange={handleInputChange} />
                        <input name="period1Start" type="datetime-local" value={period1Start} onChange={handleInputChange} />
                        <input name="period2End" type="datetime-local" value={period2End} onChange={handleInputChange} />
                        {/* <select name="cantPeriods" onChange={handleInputChange}>
                            <option>Elige la cantidad de periodos</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="e">3</option>
                        </select> */}
                        {/* {
                            // cantPeriods == 1 ? (
                            //     <>
                            //     <input type="text" placeholder="Nombre del periodo"/>
                            //     <input type="datetime-local" />
                            //     <input type="datetime-local" />
                            //     </>
                            // )
                            // : (
                            //     <>
                            //     <input type="text" placeholder="Nombre del periodo"/>
                            //     <input type="datetime-local" />
                            //     <input type="datetime-local" />
                            //     <input type="text" placeholder="Nombre del periodo"/>
                            //     <input type="datetime-local" />
                            //     <input type="datetime-local" />
                            //     </>
                            // )

                            // options()
                        } */}
                        <button>Crear</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
