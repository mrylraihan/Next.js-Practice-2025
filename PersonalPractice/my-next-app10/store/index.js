import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    age:0,
    email:""
}

const nameSlice = createSlice({
    name: "nameSlice",
    initialState: initialState,
    reducers:{
        getFormData:(state, action)=>{
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.email = action.payload.email; 
        }
    }
})

export const nameActions = nameSlice.actions;


const store = configureStore({
    reducer: {nameSlice: nameSlice.reducer}
})

export default store;