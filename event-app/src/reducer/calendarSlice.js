import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://6808bd43942707d722df86c9.mockapi.io/event";

// All action
export const fetchEvents = createAsyncThunk(
   "calendar/fetchEvents",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get(API_URL);
         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

export const handleAddEvent = createAsyncThunk('calendar/handleAddEvent',
   async (eventData, { rejectWithValue }) => {
      try {
         const response = await axios.post(API_URL, eventData);
         console.log(eventData)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
)

export const handleEdit = createAsyncThunk('calendar/handleEdit',
   async (eventEdit, { rejectWithValue }) => {
      try {
         const response = await axios.put(`${API_URL}/${eventEdit.id + 1}`, eventEdit)
         console.log("edit action: ", response.data)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const handleDelete = createAsyncThunk('calendar/handleDelete',
   async (id, { rejectWithValue }) => {
      try {
         await axios.delete(`${API_URL}/${id}`)
         return id
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const initialState = {
   event: [],
   status: "idle",
   err: null,
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
         const { id, name, description, time, date } = action.payload;
         console.log("slice:", action.payload);
         state.event[id] = { name, description, time, date };
      },
      deleteEvent: (state, action) => {
         const { id } = action.payload;
         state.event.splice(id, 1);
      },
   },
   // Add status
   extraReducers: (builder) => {
      builder
         .addCase(fetchEvents.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchEvents.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.event = action.payload;
         })
         .addCase(fetchEvents.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
         })
         .addCase(handleAddEvent.pending, (state) => {
            state.status = "loading"
         })
         .addCase(handleAddEvent.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.event.push(action.payload);
         })
         .addCase(handleAddEvent.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
         })
         .addCase(handleDelete.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(handleDelete.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.event = state.event.filter(event => event.id !== action.payload);
         })
         .addCase(handleDelete.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         })
   },
});

export const { deleteEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
