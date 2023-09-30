import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null
};


const lsToUserState = createAsyncThunk(
    "user/lsToUserState",
    () => {
        const lsUser = localStorage.getItem("user");
        const lsToken = localStorage.getItem("token");
        console.log(lsUser);
        console.log(lsToken);
        let user = null;
        let token = null;
        if (lsUser != undefined || lsUser != null) {
            user = JSON.parse(lsUser);
        }
        if (lsToken != undefined || lsToken != null) {
            token = lsToken;
        }
        console.log("user thunk", { user, token })
        return { user, token };
    }
)

const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            login: (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
            },
            logout: (state) => {
                state.user = null;
                state.token = null;
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            }
        },
        extraReducers: (builder) => {
            builder.addCase(
                lsToUserState.fulfilled,
                (state, action) => {
                    state.user = action.payload.user
                }
            )
        }
    }
)

export const { login, logout } = userSlice.actions;
export { lsToUserState }
export default userSlice.reducer;