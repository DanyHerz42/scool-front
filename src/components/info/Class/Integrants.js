import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'

import profilePrfe from '../../../assets/profilePicture/foto1.jpg'
import { getIntegrantsClass } from '../../../services/class'
import { IntegrantsRow } from './IntegrantsRow'

export const Integrants = () => {
    const { id } = useParams();
    const History = useHistory();

    const [teacher, setTeacher] = useState(
        {
            loading: true,
            teacher: [],
        }
    );

    const [students, setStudents] = useState(
        {
            loading: true,
            students: []
        }
    );

    const getAllIntegrants = async () => {
        const {integrants } = await getIntegrantsClass(id);
        const { students } = integrants;
        const { teacher } = integrants;

        setTeacher({
            teacher: teacher
        });
        setStudents({
            students: students
        });
    };

    useEffect(() => {
        getAllIntegrants();
        return () => {
            setTeacher({});
            setStudents({});
        };
    }, []);    
    // console.log(teacher);
    // console.log(students);

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
                    {teacher.teacher.map((datacard) => (
                        <IntegrantsRow
                            datacard={datacard}
                        />
                    ))}
                    <div className="Subtitle_Integrants">
                        <p>Alumnos</p>
                    </div>
                    {students.students.map((datacard) => (
                        <IntegrantsRow
                            datacard={datacard}
                        />
                    ))}
                </div>
                
            </div>
            
        </>
    )
}
