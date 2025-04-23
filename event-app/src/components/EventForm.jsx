import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddEvent } from "../reducer/calendarSlice";
import "./EventForm.css";

const EventForm = () => {
	const dispath = useDispatch();
	const [formData, setformData] = useState({
		name: "",
		description: "",
		time: "",
		date: "",
	});

	const handleChang = (e) => {
		setformData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispath(handleAddEvent(formData));

		setformData({
			name: "",
			description: "",
			time: "",
			date: "",
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-3">
				<input
					type="text"
					name="name"
					placeholder="Event Name"
					value={formData.name}
					onChange={handleChang}
					className="input-orange"
					required
				/>
				<input
					type="text"
					name="description"
					placeholder="Description"
					value={formData.description}
					onChange={handleChang}
					className="input-orange"
				/>
				<div className="grid grid-cols-2 gap-3">
					<input
						type="time"
						name="time"
						placeholder="Time"
						value={formData.time}
						onChange={handleChang}
						className="input-orange"
						required
					/>
					<input
						type="date"
						name="date"
						placeholder="Date"
						value={formData.date}
						onChange={handleChang}
						className="input-orange"
						required
					/>
				</div>
				<button type="submit" className="btn-orange">
					<div className="flex items-center justify-center">Add Event</div>
				</button>
			</form>
		</div>
	);
};
export default EventForm;
