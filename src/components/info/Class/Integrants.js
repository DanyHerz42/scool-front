import React, {useState} from 'react'

import profilePrfe from '../../../assets/profilePicture/foto1.jpg'
import { IntegrantsStudent } from './IntegrantsStudent'

export const Integrants = () => {

    const apiIntegrants= [
        {
            "profesor": [
                {
                    "name_profe": "Gaurdiola",
                    "Profile_picture": "../../assets/profilePicture/foto1.jpg",
                },
            ]
        },
        {
            "alumnos": [
                {
                    "name": "student1",
                    "imgStudent": "/student1"
                },
                {
                    "name": "student2",
                    "imgStudent": "/student2"
                },
                {
                    "name": "student3",
                    "imgStudent": "/student3"
                },
            ]
        }
    ];

    // const [dataCardsIntegrants, setDataCardsIntegrants] = useState(apiIntegrants)

    return (
        <>
            <div className="head_containerInfoOFClass">
                <p className="title_sectionClass">Integrantes</p>
            </div>
            <div className="containerIntegrants">
                <div className="SubcontainerIntegrants">
                    <div className="Subtitle_Integrants">
                        <p>Profesor</p>
                    </div>
                    <div className="containerIntegrant">
                        <div className="containerFlex">
                            <img className="picIntegrant" src={profilePrfe} alt="fotoProfe"/>
                            <div className="containerFlexJustCenter">
                                <p className="name_integrant">Josep Guardiola</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="Subtitle_Integrants">
                        <p>Alumnos</p>
                    </div>
                    {/* {dataCardsIntegrants.alumnos.map((datacard) => ( */}
                    <IntegrantsStudent
                        // datacard={datacard.alumno}
                    />
                    {/* ))} */}
                </div>
                
            </div>
            
        </>
    )
}
