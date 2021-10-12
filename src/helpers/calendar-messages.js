import { NoEvents } from "../components/ui/NoEvents";

export const messages = {
    allDay: 'Todo el día',
    previous: '<',
    next: '>',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    // noEventsInRange: 'No hay eventos en este rango',
    noEventsInRange: <NoEvents />,
    showMore: total => `+ Ver más (${total})`
};