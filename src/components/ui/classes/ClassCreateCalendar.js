import React from 'react'

export const ClassCreateCalendar = () => {
    return (
        <div className="class_container-createCalendar">
            <div className="classCreateCalendar__header">
                <h2>Agendar clase</h2>
            </div>
            <div className="classCreateCalendar__body">
                <div className="classCreateCalendar__cardForm">
                    <form className="classCreateCalendar__formCalendar">
                        <h2>Agendar</h2>
                        <label>Título de la agenda</label>
                        <input type="text" name="title" placeholder="Título" />
                        <label>Tema de la agenda</label>
                        <input type="text" name="subtitle" placeholder="Tema" />
                        <label>Fecha y hora de inicio</label>
                        <input type="datetime-local" />
                        <label>Fecha y hora de término</label>
                        <input type="datetime-local" />
                        <button>Crear</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
