
import {PRODUCT_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query:() => ({
                url:PRODUCT_URL
            })
        })
    })
});

export const { useGetProductsQuery } = productsApiSlice;