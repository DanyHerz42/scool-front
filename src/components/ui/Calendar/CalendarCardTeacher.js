import React from 'react'

export const CalendarCardTeacher = () => {
    return (
        <div className="calendar__container-card">
        <div className="calendar__header-card">
            <p className="calendar_header-day">Martes</p>
            <p className="calendar_header-number">18</p>
            <p className="calendar_header-date">Mayo 2021</p>
        </div>
        <div className="calendar__info-card">
            <p className="calendar__info-toDo">Pendiente</p>
            <div className="calendar__info-acts">
            <p className="calendar__info-subtitule">Clases</p>
            <p>Programación: 10:00am - 12:00 pm</p>
            <p>Matemáticas: 10:00am - 12:00 pm</p>
            <p className="calendar__info-subtitule">Actividades asignadas</p>
            <p>Actividad 5-Programación</p>
            <p>Actividad 2-Inglés</p>
            </div>
        </div>
    </div>
    )
}
