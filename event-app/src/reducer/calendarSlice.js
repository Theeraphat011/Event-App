import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   event: [],
};

const calendarSlice = createSlice({
   name: "calendar",
   initialState: initialState,
   reducers: {
      addEvent: (state, action) => {
         const { name, description, time, date } = action.payload;
         state.event.push({ name, description, time, date });
      },
      editEvent: (state, action) => {
         const { name, description, time, date, index } = action.payload;
         state.event[index] = { name, description, time, date };
      },
      deleteEvent: (state, action) => {
         const { index } = action.payload;
         state.event.splice(index, 1);
      },
   },
});

export const { addEvent, deleteEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
