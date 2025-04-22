import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteEvent } from "../reducer/calendarSlice";
import EventForm from "../components/EventForm";
import { Link } from "react-router-dom";
import EventList from "../components/EventList";

const CalendarPage = () => {
   const calendar = useSelector((state) => state.calendar);
   const dispatch = useDispatch();

   const handleAddEvent = (formData) => {
      const response = dispatch(addEvent(formData));
      console.log("response:", response);
   };

   const handleDeleteEvent = (index) => {
      dispatch(deleteEvent(index));
      console.log("Remove event:", index);
   };

   return (
      <div>
         <h1>CalendarPage</h1>
         <EventForm onAdd={handleAddEvent} />
         <EventList payload={calendar.event} onDelete={handleDeleteEvent} />
         <Link to={"/about"}>click</Link>
      </div>
   );
};
export default CalendarPage;
