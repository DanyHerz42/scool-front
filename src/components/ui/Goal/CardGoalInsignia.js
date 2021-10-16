import React from 'react'

export const CardGoalInsignia = () => {
    return (
        <div className="goal__container-insignia">
            <h2>Mis insignias</h2>
            <div className="goal__container-imgs-first">
                <div className="goal__insignia-body">
                    <img src={`/insignias/puntual.png`} alt="img insignia" />
                    <span>Puntual</span>
                </div>
                <div className="goal__insignia-body">
                    <img src={`/insignias/respeto.png`} alt="img insignia" />
                    <span>Respeto</span>
                </div>
                <div className="goal__insignia-body">
                    <img src={`/insignias/responsabilidad.png`} alt="img insignia" />
                    <span>Responsabilidad</span>
                </div>
                <div className="goal__insignia-body">
                    <img src={`/insignias/esfuerzo.png`} alt="img insignia" />
                    <span>Esfuerzo</span>
                </div>

            </div>
            <div className="goal__container-imgs-second">
                <div className="goal__insignia-body">
                    <img src={`/insignias/tolerancia.png`} alt="img insignia" />
                    <span>Tolerancia</span>
                </div>
                <div className="goal__insignia-body">
                    <img src={`/insignias/equipo.png`} alt="img insignia" />
                    <span>Equipo</span>
                </div>
                <div className="goal__insignia-body">
                    <img src={`/insignias/solidaridad.png`} alt="img insignia" />
                    <span>Solidaridad</span>
                </div>
            </div>
        </div>
    )
}
