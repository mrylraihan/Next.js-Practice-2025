import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	name: '',
	age: 0,
	email: '',
}

export const nameSlice = createSlice({
	name: 'nameSlice',
	initialState: initialState,
	reducers: {
		getFormData: (state, action) => {
			state.name = action.payload.name
			state.age = action.payload.age
			state.email = action.payload.email
		},
	},
})

export const nameActions = nameSlice.actions
