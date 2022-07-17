import qs                            from "qs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "bdc9b15c182230c4aefc47825e6f6855";

export const weatherApi = createApi({
	reducerPath : "weatherApi",
	baseQuery   : fetchBaseQuery({ baseUrl : "http://api.weatherstack.com/"}),
	tagTypes    : [],
	endpoints   : (builder) => ({
		getData : builder.query({
			query : ({ params }) =>  `current?access_key=${API_KEY}&${qs.stringify(params)}`,
		}),
	}),
});
