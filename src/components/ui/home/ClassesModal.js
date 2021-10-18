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
        height: '320px',
        borderRadius: '10px',
        width: '400px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }
};

Modal.setAppElement('#root');

export const ClassesModal = ({ modalOpen, closeModal }) => {

    const {user} = useContext(AuthContext)

    const initialForm = {
        name: '',
        cantAlumnos: '',
        description: '',
        color: 'Elige un color para tu clase'
    };

    const [formValues, handleInputChange] = UseForm(initialForm);
    const {name, cantAlumnos, description, color} = formValues;
    
    const handleCreateClass = async (e) => {
        e.preventDefault();
        if (!name || !cantAlumnos || !description || color == 'Elige un color para tu clase') {
            
            Swal.fire('Error', 'Completa los campos correctamente', 'error')
        } else {
            const data = await createClass(name, cantAlumnos, description, user.id, color);
            console.log(data);
        }
       
    }

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
                        <input name="name" type="text" placeholder="Nombre de la clase" autoComplete="off" value={name}  onChange={handleInputChange}/>
                        <input name="cantAlumnos" type="number" placeholder="Cantidad de alumnos" autoComplete="off" value={cantAlumnos} onChange={handleInputChange}/>
                        <textarea name="description" placeholder="Descripción de la materia" autoComplete="off" value={description} onChange={handleInputChange}/>
                        <select name="color" onChange={handleInputChange}>
                            <option>Elige un color para tu clase</option>
                            <option value="#e31764">Rojo</option>
                            <option value="#dfb7ed">Lila</option>
                            <option value="#988ae6">Morado</option>
                            <option value="#98ff9b">Verde</option>
                            <option value="#089bff">Azul</option>
                        </select>
                        <button>Crear</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
