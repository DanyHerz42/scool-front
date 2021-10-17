import React from 'react'

import student1 from '../../../assets/profile/student1.png'
import student2 from '../../../assets/profile/student2.png'

export const IntegrantsStudent = () => {

    return (
        <>
            <div className="containerIntegrant">
                <div className="containerFlex">
                    <img className="picIntegrant" src={student1} alt="fotoAlumno"/>
                    <div className="containerFlexJustCenter">
                        <p className="name_integrant">Jonathan Ruiz</p>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="containerIntegrant">
                <div className="containerFlex">
                    <img className="picIntegrant" src={student2} alt="fotoAlumno"/>
                    <div className="containerFlexJustCenter">
                        <p className="name_integrant">Victor Rojas</p>
                    </div>
                </div>
                <hr/>
            </div>
        </>
    )
}
