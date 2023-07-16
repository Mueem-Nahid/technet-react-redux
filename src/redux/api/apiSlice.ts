import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000'
   }),
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: () => '/products',
      }),
      singleProduct: builder.query({
         query: (id) => `/product/${id}`,
      }),
      postComment: builder.mutation({
         query:({id,...payload})=>({ // only one argument can be received
            url: `/comment/${id}`,
            method: 'POST',
            body: payload
         })
      })
   }),
});

export const {useGetProductsQuery, useSingleProductQuery, usePostCommentMutation} = api