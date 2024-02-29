import { baseApi } from "../../api/baseApi";

const donorsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        addDonors: builder.mutation({
            query: (data) => ({
                url: '/user-donors',
                method: 'POST',
                body: data
            })
        }),

        getDonors: builder.query({
            query: () => ({
                url: '/user-donors',
                method: 'GET',
            })
        })

    })
})


export const {
    useAddDonorsMutation,
    useGetDonorsQuery

} = donorsApi