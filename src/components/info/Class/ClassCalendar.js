import React from 'react'
import { Calendar } from '../../ui/Calendar/Calendar'
import { CalendarCard } from '../../ui/Calendar/CalendarCard'

export const ClassCalendar = () => {

    return (
        <>
            <div className="head_containerInfoOFClass">
                <p className="title_sectionClass">Calendario de clase</p>
            </div>
            <div className="hola container-calendar">
                <CalendarCard />
                <Calendar/>
            </div>
        </>
    )
}
