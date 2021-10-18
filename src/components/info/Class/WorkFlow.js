import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom';

import pdf from '../../../assets/imgs/pdf.PNG'
import { getWorkFlowClass } from '../../../services/class';
import { Announcement } from './Announcement';
import { HomeWork } from './Homework';

export const WorkFlow = () => {
    const { id } = useParams();
    const History = useHistory();

    const [arrPeriods, setArrPeriods] = useState({
        loading: true,
        arrPeriods: []
    });

    const getPeriod = async () => {
        const { arrPeriods } = await getWorkFlowClass(id);
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

    const allWorkFlow = () => {
        var workFlows = arrPeriods.arrPeriods.map(function(obj) {
            return obj;
        }); 
        const arrayAll = [];
        var len = workFlows.length;
        for (var i = 0; i < len; i++) {
            var { workflow } = workFlows[i];
            var lenWorkflow = workflow.length
            for (var j = 0; j < lenWorkflow; j++) {
                var dato = workflow[j]
                arrayAll.push(dato);
            }
        }
        return arrayAll;
    }
    const datosSinPeriodo = allWorkFlow()
    console.log(datosSinPeriodo);

    return (
        <>
            <div className="head_containerInfoOFClass">
                <p className="title_sectionClass">Flujo de trabajo</p>
            </div>
            <div className="containerIntegrants">
                {datosSinPeriodo.map((datacard) => (
                    datacard.type_ === "ANNOUNCEMENT" ? (<Announcement
                    datacard={datacard} />) : (<HomeWork datacard={datacard}/>)
                ))}
            </div>
        </>
    )
}
