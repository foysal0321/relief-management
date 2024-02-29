import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        addReview: builder.mutation({
            query: (data) => ({
                url: '/create-testimonial',
                method: 'POST',
                body: data
            })
        }),

        getReview: builder.query({
            query: () => ({
                url: '/create-testimonial',
                method: 'GET',
            })
        })

    })
})


export const {
    useAddReviewMutation,
    useGetReviewQuery

} = reviewApi