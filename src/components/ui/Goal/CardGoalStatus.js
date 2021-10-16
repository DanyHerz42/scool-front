import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'

export const CardGoalStatus = () => {

    const { user } = useContext(AuthContext)
    return (
        <div className="goal__container-cardStatus">
            <div className="goal__status-container">
                <div className="goal__status-header">
                    <img src={`/profile/student4.png`} alt="img profile" />
                    <span>{user.name}</span>
                </div>
            </div>
            <div className="goal__status-body">
                <h2>Status</h2>
                <div className="goals__status-medals">
                    <img className="goals__status-medals-img" src="/goals/medallaLogo.png" alt="medalla logo" />
                    <div className="goals__status-medals-container">
                        <div className="goals__status-medals-level">
                            <span>Estudiante nivel Élite</span>
                            <img className="goals__status-level-img" src={`/goals/elite.png`} alt="img level" />
                        </div>
                        <div className="goals__status-medals-level">
                            <span>2 medallas conseguidas</span>
                            <img className="goals__status-level-img" src={`/goals/actual.png`} alt="img count" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
