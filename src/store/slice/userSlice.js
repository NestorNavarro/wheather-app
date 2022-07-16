import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name     : "",
	lastname : "",
	lat      : "",
	lon      : "",
};

export const userSlice = createSlice({
	name     : "user",
	initialState,
	reducers : {
		setUserData : (state, action) => {
			state.name = action.payload.name;
			state.lastname = action.payload.Apellido;
			state.lat = action.payload.lat;
			state.lon = action.payload.lon;
		},
		clearUserData : (state) => initialState,
	},
});


// Action creators are generated for each case reducer function
export const { setUserData, clearUserData } = userSlice.actions;
