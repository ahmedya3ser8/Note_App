import { INote } from "@interfaces/inote";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

interface INoteResponse {
  msg: string | null,
  notes: INote[],
}

const actGetUserNotes = createAsyncThunk('notes/actGetUserNotes', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.get<INoteResponse>(`/api/v1/notes`);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetUserNotes;
