import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
   event: [],
   state: 'idle',
   err: null
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
         const { index, name, description, time, date } = action.payload;
         console.log("slice:", action.payload);
         state.event[index] = { name, description, time, date };
      },
      deleteEvent: (state, action) => {
         const { index } = action.payload;
         state.event.splice(index, 1);
      },
   },
});

export const { addEvent, deleteEvent, editEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
