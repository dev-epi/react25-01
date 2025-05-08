import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

export const getUserFeedbacks  = createAsyncThunk('feedbacks/getAll' , async(userId)=>{

    let response = await axiosInstance.get('/feedbacks/'+userId)
    return response
})

const feedbackSlice = createSlice({
    name : 'feedbacks',
    initialState : {
        data : [],
        error : '',
        status : ''
     },
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
        .addCase(getUserFeedbacks.fulfilled , (state , action)=>{
            state.status = 'Success'
            state.data = action.payload
        })
        .addCase(getUserFeedbacks.pending , (state , action)=>{
            state.status = 'Pending'
        })

        
    }
})

export default feedbackSlice.reducer
