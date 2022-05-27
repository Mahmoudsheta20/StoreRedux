import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    items: [],
    status: null,
    error:null
}
export const productfetch = createAsyncThunk(
    "product/productfetch",
    async(id=null, {rejectWithValue}) => {
        try{
           const response = await axios.get("http://localhost:5000/product")
        return response?.data 
        }
        catch(error){
            return rejectWithValue(error.response.data)

        }
    }
)
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers:{
[productfetch.pending]:(state, action)=>{
    state.status ='pending'
},
[productfetch.fulfilled]:(state, action)=>{
    state.status ='success'
    state.items = action.payload
},
[productfetch.rejected]:(state, action)=>{
    state.status ='rejected'
    state.error = action.payload
},

    }



})

export default productSlice.reducer