import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../../helpers/calendar-messages';

moment.locale('es');
const localizer = momentLocalizer(moment);
const events = [
    {
    title: 'Clase de programación',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    },
    {   
        title: 'Clase de inglés',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
    },
   
]

export const Calendar = () => {

   
  

    return (
        <div className="calendar__container-calendar">
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                onSelectSlot={(e) => console.log(e)}
                selectable
               
            />
        </div>
    )
}
