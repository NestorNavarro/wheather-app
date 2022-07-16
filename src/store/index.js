// import "regenerator-runtime/runtime"; Uncomment this line if bugs appear.
import { combineReducers } from "redux";
import { configureStore }  from "@reduxjs/toolkit";
import { setupListeners }  from "@reduxjs/toolkit/query";

// Import Own Components
import { userApi } from "./api/userApi";
import * as Slices from "./slice";

const rootReducer    = combineReducers({
	...Object.entries(Slices).reduce(
		(acc, [key, value]) => ({
			...acc,
			[key] : value.reducer,
		}),
		{}
	),
	[userApi.reducerPath] : userApi.reducer,
});


export const store = configureStore({
	reducer    : rootReducer,
	devTools   : true,
	middleware : (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

export default store;
