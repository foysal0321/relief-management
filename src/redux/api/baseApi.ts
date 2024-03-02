import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ["relief", "community", "volunteer"],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://relief-management-server.vercel.app/api/v1' }),
    endpoints: () => ({})
})