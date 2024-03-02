import { baseApi } from "../../api/baseApi";


const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        addVolunteer: builder.mutation({
            query: (data) => ({
                url: '/volunteer',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["volunteer"]
        }),

        getVolunteers: builder.query({
            query: () => ({
                url: '/volunteer',
                method: 'GET',
            }),
            providesTags: ["volunteer"]
        })

    })
})


export const {
    useAddVolunteerMutation,
    useGetVolunteersQuery
    
} = volunteerApi