import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getProucts = createAsyncThunk(
    "proudct/getProducts",
    async () => {
        const response = await fetch('http://localhost:5000/product');
        const json = await response.json();
        return json;
    }
)


const initialState = {
    product: [],
    baseUrl: ""
}

const productSlice = createSlice(
    {
        name: "product",
        initialState,
        extraReducers: (builder) => {
            builder.addCase(
                getProucts.fulfilled,
                (state, action) => {
                    state.product = action.payload.product;
                    state.baseUrl = action.payload.imageBaseUrl
                }
            )
            builder.addCase(
                getProucts.rejected,
                (state) => {
                    state.product = []
                }
            )
        }
    }
)


export { getProucts };
export default productSlice.reducer;
