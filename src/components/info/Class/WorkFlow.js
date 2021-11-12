import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom';
import Select from 'react-select'

import pdf from '../../../assets/imgs/pdf.PNG'
import { getWorkFlowClass } from '../../../services/class';
import { Announcement } from './SortBy/Announcement';
import { DateWorkFlow } from './SortBy/DateWorkFlow';
import { HomeWork } from './SortBy/Homework';
import { PeriodWorkFlow } from './SortBy/PeriodWorkFlow';

export const WorkFlow = () => {
    const [indicator, setIndicator] = useState(1);
    const [value, setValue] = useState(null);
    const { id } = useParams();
    const History = useHistory();

    const options = [
        { value: '1', label: 'Por Periodo' },
        { value: '2', label: 'Por Fecha' }
    ]

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
        var workFlows = arrPeriods.arrPeriods.map(function (obj) {
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

    const mandarIndicador = (value) => {
        var numero = Number(value.value)
        setValue(value)
        setIndicator(numero)
    }
    const periodos = arrPeriods.arrPeriods;
    console.log(periodos);

    return (
        <>
            <div className="head_containerInfoOFClass">
                <p className="title_sectionClass">Flujo de trabajo</p>
                <div className="selectWorkFlow">
                    <Select
                        value={value}
                        options={options}
                        onChange={mandarIndicador}
                    />
                </div>
            </div>

            <div className="containerIntegrants">
                {indicator === 1 ? (
                    <PeriodWorkFlow
                        periodos={periodos}
                    />
                ) : null}
                {indicator === 2 ? (
                    <DateWorkFlow
                        datosSinPeriodo={datosSinPeriodo}
                    />
                ) : null}
            </div>
        </>
    )
}
