import { createAsyncThunk } from "@reduxjs/toolkit";

//const baseUrl = 'process.env.REACT_APP_BASE_URL';
const baseUrl = 'http://localhost:4000/api';

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
    const url = `${baseUrl}/auth/logout`;
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