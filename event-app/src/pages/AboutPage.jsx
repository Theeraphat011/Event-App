import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AboutEdit from "../components/AboutEdit";
import { handleEdit } from "../reducer/calendarSlice";
import { useEffect } from "react";

const AboutPage = () => {
	const { id } = useParams();
	const param = parseInt(id);
	const event = useSelector((state) => state.calendar.event);
	const detailEvent = event[param];
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleEditEvents = (formEdit) => {
		dispatch(handleEdit({ ...formEdit, id: param }));
	};

	useEffect(() => {
		if (isNaN(param) || !detailEvent) {
			navigate("/about");
		}
	}, [param, detailEvent]);

	return (
		<div>
			{detailEvent ? (
				<AboutEdit detailEvent={detailEvent} handleEditEvents={handleEditEvents} />
			) : (
				<p>Loading event details...</p>
			)}
		</div>
	);
};
export default AboutPage;
