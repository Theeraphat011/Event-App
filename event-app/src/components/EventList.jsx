import { Link } from "react-router-dom";
import { Eraser } from "lucide-react";

const EventList = ({ payload, handleDelete = () => {} }) => {
	return (
		<div className="bg-white">
			<div className="grid grid-cols-3 text-center bg-gradient-to-r from-green-500 to-green-400 py-2 rounded-md text-white font-semibold">
				<span>Num</span>
				<span>Name</span>
				<span>Action</span>
			</div>
			{payload.length > 0 ? (
				payload.map((list, index) => (
					<div
						key={list.id}
						className="grid grid-cols-3 text-center items-center py-3 border-b border-green-500 hover:bg-green-50 transition-all duration-300">
						<Link
							to={`/about/${index}`}
							className="text-green-600 font-medium hover:text-green-800 transition-colors">
							{index + 1}
						</Link>
						<Link
							to={`/about/${index}`}
							className="hover:text-green-600 transition-colors">
							<span className="font-medium">{list.name}</span>
						</Link>
						<div>
							<button
								onClick={() => handleDelete(list.id)}
								className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded-md transition-all duration-300  ml-2 cursor-pointer">
								<Eraser size={17} />
								<span>Remove</span>
							</button>
						</div>
					</div>
				))
			) : (
				<div className="text-center py-8 text-gray-500">No events available</div>
			)}
		</div>
	);
};
export default EventList;
