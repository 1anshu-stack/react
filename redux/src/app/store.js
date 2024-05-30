import {configureStore} from "@reduxjs/toolkit"
import todoreducer from "../feature/todo/todoslice"

export const store = configureStore({
     reducer: todoreducer
})