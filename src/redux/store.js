import { configureStore } from '@reduxjs/toolkit'
import modeChanger from './feature/darkMode'

export const store = configureStore({
  reducer: {modeChanger},
})