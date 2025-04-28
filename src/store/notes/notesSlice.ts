import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actGetUserNotes from "./act/actGetUserNotes";

interface INotesState {
  msg: string | null,
  notes: { 
    _id: string
    title: string
    content: string
    createdBy: string
    createdAt: string
    updatedAt: string
    __v: number}[],
  loading: TLoading,
  error: string | null
}

const initialState: INotesState = {
  msg: null,
  notes: [],
  loading: "idle",
  error: null
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get user notes
    builder.addCase(actGetUserNotes.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actGetUserNotes.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload.msg;
      state.notes = action.payload.notes;
    })
    builder.addCase(actGetUserNotes.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    })
  }
})

export default notesSlice.reducer;
