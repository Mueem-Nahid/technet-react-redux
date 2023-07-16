import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000'
   }),
   tagTypes: ['comments'],
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: () => '/products',
      }),
      singleProduct: builder.query({
         query: (id) => `/product/${id}`,
      }),
      postComment: builder.mutation({
         query: ({id, ...data}) => ({ // only one argument can be received
            url: `/comment/${id}`,
            method: 'POST',
            body: data
         }),
         invalidatesTags:['comments']
      }),
      getComments: builder.query({
         query: (id) => `/comment/${id}`,
         providesTags:['comments']
      }),
   }),
});

export const {
   useGetProductsQuery,
   useSingleProductQuery,
   usePostCommentMutation,
   useGetCommentsQuery
} = api