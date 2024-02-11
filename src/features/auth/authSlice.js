import { createSlice } from "@reduxjs/toolkit";
import { signup, loginPassword, logout } from "./authThunks";
import { startLoading, operationSuccess, operationFailed } from "./helpers";

const initialState = {
    isLoggedIn: false,
    loading: false,
    user: null,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, startLoading)
            .addCase(signup.fulfilled, operationSuccess)
            .addCase(signup.rejected, operationFailed)
            .addCase(loginPassword.pending, startLoading)
            .addCase(loginPassword.fulfilled, operationSuccess)
            .addCase(loginPassword.rejected, operationFailed)
            .addCase(logout.pending, startLoading)
            // eslint-disable-next-line no-unused-vars
            .addCase(logout.fulfilled, (state, _) => {
                state.isLoggedIn = false;
                state.loading = false;
                state.user = null;
                state.error = null;
            })
            .addCase(logout.rejected, operationFailed)
    }
})

export default authSlice.reducer;