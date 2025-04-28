import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { TLoginResponse } from "@interfaces/iauth";

type TFormData = {
  email: string;
  password: string;
}

const actAuthLogin = createAsyncThunk('auth/actAuthLogin', async (formData: TFormData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post<TLoginResponse>(`/api/v1/users/signIn`, formData);
    return res.data
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actAuthLogin;
