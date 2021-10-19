import React from 'react'

export const ClassCreateAct = () => {
    return (
        <div className="class_container-createAct">
            <div className="classCreateAct__header">
                <h2>Crear actividad</h2>
            </div>
            <div className="classCreateAct__body">
                <div className="classCreateAct__cardForm">
                    <form className="classCreateAct__formAct">
                        <h2>Actividad</h2>
                        <label>Título de la actividad</label>
                        <input type="text" name="title" placeholder="Título" />
                        <label>Tema de la actividad</label>
                        <input type="text" name="subtitle" placeholder="Tema" />
                        <label>Indicaciones de la actividad</label>
                        <textarea  placeholder="Indicaciones"/>
                        <label>Fecha de entrega y hora</label>
                        <input type="datetime-local" />
                        <label>Subir archivo</label>
                        <input type="file" />
                        <button>Crear</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
