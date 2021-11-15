import React, { useState, useEffect } from 'react'
import {
    // useHistory,
    useParams
} from 'react-router'

import { getIntegrantsClass } from '../../../services/class'
// import { Loading } from '../../ui/Loading'
import { IntegrantsRow } from './IntegrantsRow'
import { NameStudent } from './SortBy/NameStudent'
import LoadingLogo from '../../../assets/imgs/loading.png'


export const Integrants = () => {
    const { id } = useParams();
    // const History = useHistory();
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(null)


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
        const { integrants } = await getIntegrantsClass(id);
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

    const animacionSorteo = () => {
        setName(null)
        setLoading(true)
        setTimeout(() => getStudent(), 250);
    }

    const getStudent = () => {
        setLoading(false)
        var estudiantes = students.students
        var ancho = students.students.length
        var numRandom = Math.floor(Math.random() * (ancho))
        var estudiante = estudiantes[numRandom]
        var nameStudent = `${estudiante.name_user} ${estudiante.lastname}`
        setName(nameStudent)
    }

    const clearName = () => {
        setName(null)
    }

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
                    <div className="sorteoIntegrante">
                        <button className="sorteo" onClick={animacionSorteo}>
                            Escoger un alumno al azar
                        </button>
                        <br /><br />
                        {loading === false ? (null) : (
                            // <Loading />
                            <div className="container-loading">
                                <img className="loading-spinner" src={LoadingLogo} alt="loading img" />
                            </div>
                        )}
                        {name === null ? (null) : (
                            <NameStudent
                                name={name}
                                clearName={clearName}
                            />
                        )}
                    </div>
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
