import React, { useState, useEffect } from 'react'
import { Period } from './Period';

export const PeriodWorkFlow = (props) => {
    const { periodos } = props
    console.log(periodos);

    return (
        <>
            {periodos.map((datacard) => (
                <Period datacard={datacard} />
            ))}
            {/* <p>Hola</p> */}
        </>
    )
}