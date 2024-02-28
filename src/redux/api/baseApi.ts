import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ["relief"],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://relief-server.vercel.app/api/v1' }),
    endpoints: () => ({})
})