import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from './feedbackSlice'

export const store = configureStore({
    reducer :{
        feedbacks : feedbackReducer
    }
})