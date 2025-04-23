import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../reducer/calendarSlice";

export const store = configureStore({
	reducer: {
		calendar: calendarReducer,
	},
});
