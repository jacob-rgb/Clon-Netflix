import { createSlice } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

export const priceSlide = createSlice({
    name: "price",
    initialState: {
        value: 0,
    },
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload;
        },
    }
})

export const { setPrice } = priceSlide.actions;

export const selectPrice = state => state.price.price;

export default priceSlide.reducer;