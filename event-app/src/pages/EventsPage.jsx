import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const EventsPage = () => {
	const events = useSelector((state) => state.calendar.event);
	console.log(events);

	return (
		<div>
			<h1 className="text-center text-3xl font-semibold text-gray-800">All events</h1>
			<div className="h-[520px] overflow-y-auto mt-2 border border-gray-300 rounded-lg p-5">
				{events.map((item) => (
					<Link to={`/about/${item.id}`}>
						<div className="mt-8 border border-gray-300 rounded-md p-5 shadow-md cursor-pointer">
							<h1 className="text-lg font-semibold text-gray-700 mb-3">
								{item.name}
							</h1>
							<p className="text-gray-500 mb-1">{item.description}</p>
							<time>{item.time} </time>
							<time>{item.date}</time>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};
export default EventsPage;
