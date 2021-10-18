import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'

import foto1 from '../../../assets/profilePicture/foto1.jpg';
import { getIntegrantsClass } from '../../../services/class';

export const MenuLeftClass = () => {
    const { id } = useParams();
    const History = useHistory();

    const [classInfo, setClassInfo] = useState(
        {
            loading: true,
            classInfo: [],
            integrants: []
        }
    );

    const getInfoOfClass = async () => {
        const { classInfo, integrants } = await getIntegrantsClass(id);
        setClassInfo({
            classInfo: classInfo,
            integrants: integrants
        });
    }

    useEffect(() => {
        getInfoOfClass();
        return () => {
            setClassInfo({});
        };
    }, []);

    // function prueba( ) {
    //     classInfo.integrants.map((data) => (
    //         console.log(data)
    //     ))
    // }

    const { students } = classInfo.integrants;
    // const { students } = students;

    // students.map((data1) => (
    //     console.log(data1)
    // ))
    console.log(students);


    return (
        <div className="menu_class">
            <div className="headMenu_sideLeft">
                {classInfo.classInfo.map((data) => (            
                    <div className="headTop">
                        
                        <div className="carpetaSmall">
                            <svg className="icon--plus">
                                <polygon fill={data.color}
                                    points="45 85, 45 40, 70 40, 90 50, 125 50, 125 85" />
                                <polygon fill="#A9D9FF"
                                    points="35 78, 110 40, 118 78" />
                                <polygon fill={data.color}
                                    points="45 105, 35 60, 135 60, 125 105" />
                            </svg>
                        </div>
            
                        <p className="titleClass">{data.name}</p>
                    </div>
                ))}
                {/* {classInfo.integrants.map((data) => (             */}
                    <div>
                        <p className="textMenuLeft">Profesor: Josep guardiola</p>
                        <p className="textMenuLeft"></p>
                        <p className="textMenuLeft">Correo: vrojas2@ucol.mx</p>
                        < img className="imgProfile"
                        src={foto1} alt="fotoPerfil"/>
                    </div>
                {/* ))} */}
            </div>
            <hr className="dividorMenu"/>
            <div className="BodyMenu_sideLeft">
                <NavLink to="./flujoDeTrabajo" activeClassName="activeBtn">Flujo de trabajo</NavLink>
                <NavLink to="./integrantes" activeClassName="activeBtn">Integrantes</NavLink>
                <NavLink to="./calendario" activeClassName="activeBtn">Calendario de clase</NavLink>
            </div>
        </div>
    )
}