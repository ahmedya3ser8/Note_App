import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TUpdateNote = {
  _id: string;
  title: string;
  content: string
}

const actUpdateNote = createAsyncThunk('notes/actUpdateNote', async (formData: TUpdateNote, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const data = {title: formData.title, content: formData.content}
    const res = await axios.put(`/api/v1/notes/${formData._id}`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actUpdateNote;
