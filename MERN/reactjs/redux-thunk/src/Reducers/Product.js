import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getProucts = createAsyncThunk(
    "proudct/getProducts",
    async () => {
        console.log('Hello');
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        return json;
    }
)


const initialState = {
    product: []
}

const productSlice = createSlice(
    {
        name: "product",
        initialState,
        extraReducers: (builder) => {
            builder.addCase(
                getProucts.fulfilled,
                (state, action) => {
                    state.product = action.payload;
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
