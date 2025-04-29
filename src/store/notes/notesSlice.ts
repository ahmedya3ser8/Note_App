import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actGetUserNotes from "./act/actGetUserNotes";
import actAddNote from "./act/actAddNote";
import { INote } from "@interfaces/inote";
import actDeleteNote from "./act/actDeleteNote";
import actUpdateNote from "./act/actUpdateNote";

interface INotesState {
  msg: string | null,
  notes: INote[],
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
    // add note
    builder.addCase(actAddNote.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actAddNote.fulfilled, (state) => {
      state.loading = "succeeded";
    })
    builder.addCase(actAddNote.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    })
    // delete note
    builder.addCase(actDeleteNote.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actDeleteNote.fulfilled, (state) => {
      state.loading = "succeeded";
    })
    builder.addCase(actDeleteNote.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    })
    // update note
    builder.addCase(actUpdateNote.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actUpdateNote.fulfilled, (state) => {
      state.loading = "succeeded";
    })
    builder.addCase(actUpdateNote.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    })
  }
})

export default notesSlice.reducer;
