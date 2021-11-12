import React from 'react'
import { Announcement } from './Announcement'
import { HomeWork } from './Homework'

export const DateWorkFlow = (props) => {
    const { datosSinPeriodo } = props
    console.log(datosSinPeriodo);
    return (
        <>
            {datosSinPeriodo.map((datacard) => (
                datacard.type_ === "ANNOUNCEMENT" ? (<Announcement
                    datacard={datacard} />) : (<HomeWork datacard={datacard} />)
            ))}
        </>
    )
}