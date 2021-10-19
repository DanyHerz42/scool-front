import React from 'react'
import { Calendar } from '../Calendar/Calendar'
import { CalendarCardTeacher } from '../Calendar/CalendarCardTeacher'

export const ClassCalendar = () => {
    return (
        <div className="class_container-calendar">
             <div className="classCalendar__header">
                <h2>Calendario de clase</h2>
            </div>
            <div className="classCalendar__body">
                <CalendarCardTeacher/>
                <Calendar />
            </div>
        </div>
    )
}
