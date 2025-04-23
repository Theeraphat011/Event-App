import { Link } from "react-router-dom";
import { Eraser } from "lucide-react";

const EventList = ({ payload, handleDelete = () => {} }) => {
	return (
		<div className="bg-white">
			{payload.length > 0 ? (
				<table className="w-full text-center border-collapse">
					<thead className="bg-green-100 text-green-700">
						<tr>
							<th className="py-2 border-b border-green-500">#</th>
							<th className="py-2 border-b border-green-500">Event</th>
							<th className="py-2 border-b border-green-500">Delete</th>
						</tr>
					</thead>
					<tbody>
						{payload.map((list, index) => (
							<tr
								key={list.id}
								className="hover:bg-green-50 transition-all duration-300">
								<td className="py-3 border-b border-green-200">
									<Link
										to={`/about/${index}`}
										className="text-green-600 font-medium hover:text-green-800 transition-colors">
										{index + 1}
									</Link>
								</td>
								<td className="py-3 border-b border-green-200">
									<Link
										to={`/about/${index}`}
										className="hover:text-green-600 transition-colors">
										<span className="font-medium">{list.name}</span>
									</Link>
								</td>
								<td className="py-3 border-b border-green-200">
									<button
										onClick={() => handleDelete(list.id)}
										className="bg-green-500 text-white p-2 cursor-pointer rounded-full">
										<Eraser size={20} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No Event</p>
			)}
		</div>
	);
};
export default EventList;
