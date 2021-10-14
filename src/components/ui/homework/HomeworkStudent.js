import React from 'react';
import HwPending from '../../../assets/imgs/hw-pending.png'
import HwFull from '../../../assets/imgs/hw-full.png'

export const HomeworkStudent = () => {
    return (
        <div className="homework__container">
            <h1>Hoy</h1>
            <h2 className="homework__titles">Pendientes</h2>
            <hr />
            <div className="homework__pending-container">
                <div className="homework__info-container">
                    <img src={HwPending} alt="img tarea pendiente" />
                    <div className="homework__info-body">
                        <p>Actividad 1. Árboles binarios</p>
                        <p>Estructura de datos</p>
                    </div>
                </div>
                <button className="homework__button">Entregar</button>
            </div>
            <div className="homework__pending-container">
                <div className="homework__info-container">
                    <img src={HwPending} alt="img tarea pendiente" />
                    <div className="homework__info-body">
                        <p>Actividad 1. Árboles binarios</p>
                        <p>Estructura de datos</p>
                    </div>
                </div>
                <button className="homework__button">Entregar</button>
            </div>
            
            <h2 className="homework__titles">Entregadas</h2>
            <hr />
            <div className="homework__pending-container">
                <div className="homework__info-container">
                    <img src={HwFull} alt="img tarea pendiente" />
                    <div className="homework__info-body">
                        <p>Actividad 1. Árboles binarios</p>
                        <p>Estructura de datos</p>
                    </div>
                </div>
                <button className="homework__button">Ver</button>
            </div>
            <div className="homework__pending-container">
                <div className="homework__info-container">
                    <img src={HwFull} alt="img tarea pendiente" />
                    <div className="homework__info-body">
                        <p>Actividad 1. Árboles binarios</p>
                        <p>Estructura de datos</p>
                    </div>
                </div>
                <button className="homework__button">Ver</button>
            </div>
            <div className="homework__pending-container">
                <div className="homework__info-container">
                    <img src={HwFull} alt="img tarea pendiente" />
                    <div className="homework__info-body">
                        <p>Actividad 1. Árboles binarios</p>
                        <p>Estructura de datos</p>
                    </div>
                </div>
                <button className="homework__button">Ver</button>
            </div>
        </div>
    )
}
