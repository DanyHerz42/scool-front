import React from 'react'

export const ClassIntegrants = () => {
    return (
        <div className="class_container-integrants">
            <div className="classIntegrants__header">
                <h2>Integrantes</h2>
            </div>
            <div className="classIntegrants__body">
                <h2>Profesor</h2>
                <div className="classIntegrants_container-profile">
                    <div className="classIntegrants_container-info">
                        <div className="classIntegrants__container-img">
                            <img src="/profile/student3.png" alt="img profile maestro" />
                        </div>
                        <span>Jonathan</span>
                    </div>
                    <hr />
                </div>
                <h2>Alumnos</h2>
                <div className="classIntegrants_container-profile">
                    <div className="classIntegrants_container-info">
                        <div className="classIntegrants__container-img">
                            <img src="/profile/student2.png" alt="img profile alumno" />
                        </div>
                        <span>Nicole</span>
                    </div>
                    <hr />
                </div>
                <div className="classIntegrants_container-profile">
                    <div className="classIntegrants_container-info">
                        <div className="classIntegrants__container-img">
                            <img src="/profile/student3.png" alt="img profile alumno" />
                        </div>
                        <span>Ramiro</span>
                    </div>
                    <hr />
                </div>
                <div className="classIntegrants_container-profile">
                    <div className="classIntegrants_container-info">
                        <div className="classIntegrants__container-img">
                            <img src="/profile/student4.png" alt="img profile alumno" />
                        </div>
                        <span>Victor</span>
                    </div>
                    <hr />
                </div>
                <div className="classIntegrants_container-profile">
                    <div className="classIntegrants_container-info">
                        <div className="classIntegrants__container-img">
                            <img src="/profile/student1.png" alt="img profile alumno" />
                        </div>
                        <span>Daniel</span>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}
