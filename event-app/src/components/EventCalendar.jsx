import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const EventCalendar = () => {
   return (
      <div className="bg-white rounded-lg">
         <div className="rounded-lg overflow-hidden">
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
               bootstrapFontAwesome={false}
               buttonHints={{
                  prev: "Previous month",
                  next: "Next month",
                  today: "Go to today",
               }}
               events={[
                  { title: "Event 1", date: "2025-04-25" },
                  { title: "Event 2", date: "2025-04-26" },
               ]}
               viewClassNames="calendar-view"
               dayHeaderClassNames="orange-header"
               dayCellClassNames="orange-cell"
               eventClassNames="orange-event"
               titleFormat={{ month: "long", year: "numeric" }}
               firstDay={0}
               height="auto"
            />
         </div>
      </div>
   );
};

export default EventCalendar;
