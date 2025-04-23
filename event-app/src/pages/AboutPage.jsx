import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { handleEdit, resetStatusEdit } from "../reducer/calendarSlice";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import AboutEdit from "../components/AboutEdit";

const AboutPage = () => {
	const { id } = useParams();
	const param = parseInt(id);
	const event = useSelector((state) => state.calendar.event);
	const statusEdit = useSelector((state) => state.calendar.statusEdit);
	const detailEvent = event[param] ? event[param] : null;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const toastShown = useRef(false);

	useEffect(() => {
		if (isNaN(param) || !detailEvent) {
			navigate("/about");
		}
	}, [param, detailEvent, navigate]);

	useEffect(() => {
		if (statusEdit === "succeeded" && !toastShown.current) {
			toast.success("Event edited successfully!");
			toastShown.current = true;
			dispatch(resetStatusEdit());
		} else if (statusEdit === "failed" && !toastShown.current) {
			toast.error("Failed to edit event. Please try again");
			toastShown.current = true;
		}

		// Reset the flag when status changes back to idle
		if (statusEdit === "idle") {
			toastShown.current = false;
		}
	}, [statusEdit, dispatch]);

	const handleEditEvents = (formEdit) => {
		toastShown.current = false;
		dispatch(handleEdit({ ...formEdit, id: param }));
	};

	return (
		<>
			{detailEvent ? (
				<div className="flex flex-col gap-10 justify-between h-full py-16 px-5">
					<div className="text-gray-800 grid gap-3 border-2 border-green-400 shadow-md rounded-xl p-5 ">
						<h1 className="text-2xl font-bold">{detailEvent.name}</h1>
						<p className="h-30 overflow-y-auto">
							<span className="text-xl font-bold">Description:</span>{" "}
							{detailEvent.description}
						</p>
						<time>
							<span className="text-xl font-bold">Time: </span> {detailEvent.time}
						</time>
						<time>
							<span className="text-xl font-bold">Date: </span>
							{detailEvent.date}
						</time>
					</div>
					<div>
						<AboutEdit detailEvent={detailEvent} handleEditEvents={handleEditEvents} />
					</div>
				</div>
			) : (
				<p>Loading event details...</p>
			)}
		</>
	);
};
export default AboutPage;
