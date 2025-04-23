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
   statusAdd: "idle",
   statusEdit: "idle",
   err: null,
};

const calendarSlice = createSlice({
   name: "calendar",
   initialState: initialState,
   reducers: {
      resetStatusAdd: (state) => {
         state.statusAdd = "idle"
      },
      resetStatusEdit: (state) => {
         state.statusEdit = "idle"
      }
   },

   // Add status
   extraReducers: (builder) => {
      builder
         // fetchEvents
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

         // handleAddEvent
         .addCase(handleAddEvent.pending, (state) => {
            state.status = "loading"
            state.statusAdd = "loading"
         })
         .addCase(handleAddEvent.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.statusAdd = "succeeded"
            const index = state.event.findIndex(event => event.id === action.payload.id)
            if (index !== -1) {
               state.event[index] = action.payload;
            }
         })
         .addCase(handleAddEvent.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
         })

         // handleEdit
         .addCase(handleEdit.pending, (state) => {
            state.status = "loading"
            state.statusEdit = "loading"
         })
         .addCase(handleEdit.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.statusEdit = "succeeded"
            const updateEvent = action.payload;
            const id = state.event.findIndex(event => event.id === updateEvent.id)

            if (id !== -1) {
               state.event[id] = updateEvent
            }

         })
         .addCase(handleEdit.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.payload
         })

         // handleDelete
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

export const { resetStatusAdd, resetStatusEdit } = calendarSlice.actions
export default calendarSlice.reducer;
