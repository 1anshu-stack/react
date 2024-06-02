import { configureStore } from "@reduxjs/toolkit";
import  authSlice from './authSlice'

const store = configureStore({
    reducer: {
        reducter: authSlice
    }
})

export default store;