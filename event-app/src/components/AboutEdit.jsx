import { useState } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const AboutEdit = ({ detailEvent, handleEditEvents = () => {} }) => {
	const statusLoading = useSelector((state) => state.calendar.status);
	const [formEdit, setformEdit] = useState({
		name: detailEvent.name,
		description: detailEvent.description,
		time: detailEvent.time,
		date: detailEvent.date,
	});

	const handleChang = (e) => {
		setformEdit({
			...formEdit,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		handleEditEvents(formEdit);

		setformEdit({
			name: "",
			description: "",
			time: "",
			date: "",
		});
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col space-y-3">
			<input
				type="text"
				name="name"
				placeholder="Event Name"
				value={formEdit.name}
				onChange={handleChang}
				className="input-green"
				required
			/>
			<input
				type="text"
				name="description"
				placeholder="Description"
				value={formEdit.description}
				onChange={handleChang}
				className="input-green"
			/>
			<div className="grid grid-cols-2 gap-3">
				<input
					type="time"
					name="time"
					placeholder="Time"
					value={formEdit.time}
					onChange={handleChang}
					className="input-green"
					required
				/>
				<input
					type="date"
					name="date"
					placeholder="Date"
					value={formEdit.date}
					onChange={handleChang}
					className="input-green"
					required
				/>
			</div>
			<button type="submit" className="flex justify-center items-center gap-3 btn-green">
				{statusLoading !== "loading" && (
					<div className="flex items-center justify-center">Edit Event</div>
				)}
				<ClipLoader color="#ffff" loading={statusLoading === "loading"} size={20} />
			</button>
		</form>
	);
};
export default AboutEdit;
