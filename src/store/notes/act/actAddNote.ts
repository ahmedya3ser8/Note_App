import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TFormData = {
  title: string,
  content: string
}

const actAddNote = createAsyncThunk('notes/actAddNote', async (FormData: TFormData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post(`/api/v1/notes`, FormData);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actAddNote;
