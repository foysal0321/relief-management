
import { baseApi } from "../../api/baseApi"


const reliefApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({

        getReliefs: builder.query({
            query: () => ({
                url: '/reliefs',
                method: 'GET'
            }),
            providesTags: ["relief"]
        }),
        getAllReliefs: builder.query({
            query: () => ({
                url: '/relief-goods',
                method: 'GET'
            }),
            providesTags: ["relief"]
        }),

        addReliefs: builder.mutation({
            query: (data) => ({
                url: '/relief-goods',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["relief"]
        }),

        updateRelief: builder.mutation({
            query: (option) => ({
                url: `/relief-goods/${option.id}`,
                method: 'PUT',
                body: option.data
            }),
            invalidatesTags: ["relief"]
        }),

        deleteRelief: builder.mutation({
            query: (id) => ({
                url: `/relief-goods/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['relief']
        }),
    })
})


export const {
    useGetReliefsQuery,
    useGetAllReliefsQuery,
    useAddReliefsMutation,
    useUpdateReliefMutation,
    useDeleteReliefMutation,
} = reliefApi
