import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getCategoies = createAsyncThunk(
    "category/getCategoies",
    async () => {
        
        const response = await fetch('http://localhost:5000/category');
        const json = await response.json();
        return json;
    }
)


const initialState = {
    category: [],
    imageBaseUrl: ""
}

const categorySlice = createSlice(
    {
        name: "category",
        initialState,
        extraReducers: (builder) => {
            builder.addCase(
                getCategoies.fulfilled,
                (state, action) => {
                    state.category = action.payload.category;
                    state.imageBaseUrl = action.payload.imageBaseUrl
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
