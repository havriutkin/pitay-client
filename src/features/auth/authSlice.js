//const baseUrl = 'process.env.REACT_APP_BASE_URL';
const baseUrl = 'http://localhost:4000/api';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// TODO separate to different file
export const signup = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
    const url = `${baseUrl}/auth/signup`;
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(userData)
    };

    try {
        const response = await fetch(url, settings);
        const data = await response.json();

        if (response.status === 201) {
            return data.user;
        }
        return rejectWithValue(data.message);
    } catch(err) {
        return rejectWithValue(err.message);
    }
});

export const loginPassword = createAsyncThunk('auth/loginPassword', async (userData, { rejectWithValue }) => {
    const url = `${baseUrl}/auth/login/password`;
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(userData)
    };

    try {
        const response = await fetch(url, settings);
        const data = await response.json();

        if (response.status === 200) {
            return data.user;
        }
        return rejectWithValue(data.message);
    } catch(err) {
        return rejectWithValue(err.message);
    }

});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    const url = `${base_url}/auth/logout`;
    const settings = {
        method: 'POST',
        credentials: "include",
    };

    try {
        const response = await fetch(url, settings);
        const data = await response.json();

        if (response.status === 200) {
            return data.message;
        }
        return rejectWithValue(data.message);
    } catch(err) {
        return rejectWithValue(err.message);
    }

});


// TODO separate to different file
// Helper to set loading state and clear errors
const startLoading = (state) => {
    state.loading = true;
    state.error = null;
};

// Helper to set the user on successful operation
const operationSuccess = (state, action) => {
    state.isLoggedIn = true;
    state.loading = false;
    state.user = action.payload;
    state.error = null;
};

// Helper for handling operation failure
const operationFailed = (state, action) => {
    state.loading = false;
    state.error = action.payload; // Adjust based on how you're handling errors
    state.user = null;
};
  

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
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.loading = false;
                state.user = null;
                state.error = null;
            })
            .addCase(logout.rejected, operationFailed)
    }
})

export default authSlice.reducer;