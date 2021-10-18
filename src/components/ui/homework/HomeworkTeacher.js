import React from 'react';
import LogoTask from '../../../assets/imgs/task.png'


export const HomeworkTeacher = () => {
    return (
        <div className="homework__container">
            <h1>Hoy</h1>
            <h2 className="homework__titles">Asignadas</h2>
            <hr />
            <div className="homework__pending-container">
                <div className="homework__info-container">
                    <img src={LogoTask} alt="img tarea pendiente" />
                    <div className="homework__info-body">
                        <p>Actividad 1. Árboles binarios</p>
                        <p>Estructura de datos</p>
                    </div>
                </div>
                <button className="homework__button">Ver</button>
            </div>
            <div className="homework__pending-container">
                <div className="homework__info-container">
                    <img src={LogoTask} alt="img tarea pendiente" />
                    <div className="homework__info-body">
                        <p>Actividad 2. Grafos</p>
                        <p>Estructura de datos</p>
                    </div>
                </div>
                <button className="homework__button">Ver</button>
            </div>
            
        </div>
    )
}
