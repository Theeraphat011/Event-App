import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useSelector } from "react-redux";
import './EventCalendar.css';

const EventCalendar = () => {
   const events = useSelector((state) => state.calendar.event);

   return (
      <div className="h-full w-full">
         <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
               start: "prev,next today",
               center: "title",
               end: "",
            }}
            buttonText={{
               today: "Today",
               prev: "Prev",
               next: "Next",
            }}
            buttonIcons={{
               prev: "chevron-left",
               next: "chevron-right",
            }}
            buttonHints={{
               prev: "Previous month",
               next: "Next month",
               today: "Go to today",
            }}
            events={events.map((item) => ({
               title: item.name,
               date: item.date,
            }))}
            dayHeaderClassNames="green-header"
            dayCellClassNames="green-cell"
            eventClassNames="green-event"
            titleFormat={{ month: "long", year: "numeric" }}
            firstDay={0}
            height="100%"
            aspectRatio={1.5} 
            handleWindowResize={true}
         />
      </div>
   );
};

export default EventCalendar;
