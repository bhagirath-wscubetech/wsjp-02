import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getCategoies = createAsyncThunk(
    "category/getCategoies",
    async () => {
        console.log('Hello');
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const json = await response.json();
        return json;
    }
)


const initialState = {
    category: []
}

const categorySlice = createSlice(
    {
        name: "category",
        initialState,
        extraReducers: (builder) => {
            builder.addCase(
                getCategoies.fulfilled,
                (state, action) => {
                    state.category = action.payload;
                }
            )
            builder.addCase(
                getCategoies.rejected,
                (state) => {
                    state.category = []
                }
            )
        }
    }
)


export { getCategoies };
export default categorySlice.reducer;
