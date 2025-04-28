import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/authSlice';
import notes from './notes/notesSlice';

export const store = configureStore({
  reducer: {
    auth,
    notes
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
