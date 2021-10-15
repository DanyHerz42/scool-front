import React from 'react'

export const CardGoalProgress = () => {
    return (
        <div className="goal__container-progress">
            <h2>Progreso de nivel</h2>
            <span>Mis medallas</span>
            <div className="goal__container-medallas">
                <div className="goal__medalla-body">
                    <img src={`/goals/novato.png`} alt="img goals" />
                    <span>Novato</span>
                </div>
                <div className="goal__medalla-body">
                    <img src={`/goals/elite.png`} alt="img goals" />
                    <span>Élite</span>
                </div>
                <div className="goal__medalla-body">
                    <img src={`/goals/veterano.png`} alt="img goals" />
                    <span>Veterano</span>
                </div>
                <div className="goal__medalla-body">
                    <img src={`/goals/pro.png`} alt="img goals" />
                    <span>Pro</span>
                </div>
                <div className="goal__medalla-body">
                    <img src={`/goals/leyenda.png`} alt="img goals" />
                    <span>Leyenda</span>
                </div>
            </div>
        </div>
    )
}
