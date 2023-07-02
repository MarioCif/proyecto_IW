import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit{


  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth',
    },
    eventColor: '#6dc9b7',
    eventBackgroundColor: '#6dc9b7',
    eventSources: [{
      events:[
        {
          title: "Reunion2",
          start: "2023-07-02T08:00:00",
          end: "2023-07-02T10:00:00"
        },
        {
          title: "Reunion1",
          start: "2023-07-02T17:00:00",
          end: "2023-07-02T19:00:00"
        }
    ]
    }],
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
    },
    locale: esLocale
  };

  constructor(){}

  ngOnInit(): void {}
}



