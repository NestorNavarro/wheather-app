import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
	reducerPath : "userApi",
	baseQuery   : fetchBaseQuery({ baseUrl : "https://dev.vidanta-ws.lumstondev.com/" }),
	tagTypes    : ["userListExample"],
	endpoints   : (builder) => ({
		getData : builder.query({
			query : () =>  "userListExample",

			providesTags : (result, error, arg) => ["userListExample"],
		}),
	}),
});
