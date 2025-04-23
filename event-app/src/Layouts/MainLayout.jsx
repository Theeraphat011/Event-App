import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEvents, resetStatusAdd } from "../reducer/calendarSlice";
import RingLoader from "react-spinners/RingLoader";

const MainLayout = () => {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.calendar.status);
	const statusAdd = useSelector((state) => state.calendar.statusAdd);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchEvents());
		}
	}, [status, dispatch]);

	useEffect(() => {
		if (statusAdd === "succeeded") {
			dispatch(fetchEvents()).then(() => {
				dispatch(resetStatusAdd);
			});
		}
	}, [statusAdd]);

	return (
		<div>
			<div className="container mx-auto max-w-[1490px] h-screen w-full px-20 py-10">
				<div className="flex gap-8 items-center justify-center h-full w-full overflow-hidden rounded-4xl px-6 py-5 shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
					<div className="w-1/4 h-full">
						<Sidebar />
					</div>
					{status === "succeeded" ? (
						<div className="w-3/4 h-full">
							<Outlet />
						</div>
					) : (
						<div className="flex justify-center items-center h-full w-3/4">
							<RingLoader color="#22c55e" size={80} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default MainLayout;
