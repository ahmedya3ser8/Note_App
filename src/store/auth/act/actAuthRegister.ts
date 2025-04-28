import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { IRegisterResponse } from "@interfaces/iauth";

type TFormData = {
  name: string;
  email: string;
  password: string;
  age: number;
  phone: string
}

const actAuthRegister = createAsyncThunk('auth/actAuthRegister', async (formData: TFormData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post<IRegisterResponse>(`/api/v1/users/signUp`, formData);
    return res.data
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actAuthRegister;
