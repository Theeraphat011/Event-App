import { useState } from "react";

const AboutEdit = ({ detailEvent, editEvent = () => {} }) => {
	const [formEdit, setformEdit] = useState({
		name: detailEvent.name,
		description: detailEvent.description,
		time: detailEvent.time,
		date: detailEvent.date,
	});

	console.log(formEdit);

	const handleChang = (e) => {
		setformEdit({
			...formEdit,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		editEvent(formEdit);

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
				className="input-orange"
				required
			/>
			<input
				type="text"
				name="description"
				placeholder="Description"
				value={formEdit.description}
				onChange={handleChang}
				className="input-orange"
			/>
			<div className="grid grid-cols-2 gap-3">
				<input
					type="time"
					name="time"
					placeholder="Time"
					value={formEdit.time}
					onChange={handleChang}
					className="input-orange"
					required
				/>
				<input
					type="date"
					name="date"
					placeholder="Date"
					value={formEdit.date}
					onChange={handleChang}
					className="input-orange"
					required
				/>
			</div>
			<button type="submit" className="btn-orange">
				<div className="flex items-center justify-center">Edit Event</div>
			</button>
		</form>
	);
};
export default AboutEdit;
