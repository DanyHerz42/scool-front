import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom';

import pdf from '../../../assets/imgs/pdf.PNG'
import { getWorkFlowClass } from '../../../services/class';

export const WorkFlow = () => {
    // const params = useParams();
    // console.log(params);
    const { id } = useParams();
    const History = useHistory();

    const [arrPeriods, setArrPeriods] = useState(
        {
            loading: true,
            workFlow: []
        }
    );
    // let data = getWorkFlowClass(id);
    // console.log(data);

    // const { arrPeriods } = getWorkFlowClass(id)
    // console.log (arrPeriods);

    const getPeriod = async () => {
        const { arrPeriods } = await getWorkFlowClass(id);
        // console.log(arrPeriods);
        setArrPeriods({
            arrPeriods: arrPeriods
        })
    };

    useEffect(() => {
        getPeriod();
        return () => {
            setArrPeriods({});
        };
    }, []);
    console.log(arrPeriods);

    return (
        <>
            <div className="head_containerInfoOFClass">
                <p className="title_sectionClass">Flujo de trabajo</p>
            </div>
            <div className="containerAct">
                <div className="head_containerAct">
                    <div className="name">
                        <p>Actividad 1</p>
                    </div>
                    <div className="nameActivity">
                        <p>Ejercicios de Diagnostico</p>
                    </div>
                </div>
                <div className="body_containerAct">
                    <p>Realizar los siguiente ejercicios que se adjutan
                        en esta asignación, subir en .doc.</p>
                </div>
                <div className="food_containerAct">
                    <img className="imgPdf" src={pdf} alt="PDF"/>
                    <p>Ejercicios.pdf</p>
                </div>
            </div>

            <div className="containerAct">
                <div className="head_containerAct">
                    <div className="namePost">
                        <p>Anuncio 1</p>
                    </div>
                    <div className="nameActivity">
                        <p>Bienvenida al curso</p>
                    </div>
                </div>
                <div className="body_containerAct">
                    <p>Bienvenidos estudiantes a este nuevo curso de Cálculo 2021.
                        Por favor revisar el plan de trabajo</p>
                </div>
                <div className="food_containerAct">
                    <img className="imgPdf" src={pdf} alt="PDF"/>
                    <p>Plan-de-trabajo.pdf</p>
                </div>
            </div>
        </>
    )
}
