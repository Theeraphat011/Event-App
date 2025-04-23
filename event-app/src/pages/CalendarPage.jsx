import { useDispatch, useSelector } from "react-redux";
import { handleDelete } from "../reducer/calendarSlice";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import EventCalendar from "../components/EventCalendar";
import { CalendarPlus, ClipboardPlus, CalendarDays } from "lucide-react";

const CalendarPage = () => {
	const calendar = useSelector((state) => state.calendar);
	const dispatch = useDispatch();

	const handleDeleteEvent = (index) => {
		dispatch(handleDelete(index));
	};

	return (
		<div className="h-full w-full flex gap-4 overflow-hidden p-2">
			<div className="w-3/5 h-full">
				<div className="bg-white p-3 h-full rounded-lg shadow-md">
					<h2 className="section-header flex items-center">
						<CalendarPlus color="#ff6600" />
						<span className="text-lg text-orange-500 font-bold ml-2">Monthly View</span>
					</h2>
					<div className="w-full h-[calc(560px)] pb-8">
						<EventCalendar />
					</div>
				</div>
			</div>

			<div className="w-2/5 h-full flex flex-col">
				<div className="bg-white p-4 mb-4 rounded-lg shadow-md">
					<h2 className="section-header flex gap-2 items-center">
						<ClipboardPlus color="#ff6600" />
						Add New Event
					</h2>
					<EventForm />
				</div>

				<div className="bg-white p-4 flex-1 rounded-lg shadow-md">
					<h2 className="section-header flex gap-2 items-center">
						<CalendarDays color="#ff6600" />
						Events
						<p className="ml-24 text-sm">Click to detail event</p>
					</h2>
					<div className="h-54 overflow-y-auto">
						<EventList payload={calendar.event} handleDelete={handleDeleteEvent} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default CalendarPage;
