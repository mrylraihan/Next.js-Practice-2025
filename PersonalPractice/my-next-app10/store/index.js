import { configureStore } from "@reduxjs/toolkit";
import { nameSlice } from "./nameslice";


const store = configureStore({
    reducer: {nameSlice: nameSlice.reducer}
})

export default store;