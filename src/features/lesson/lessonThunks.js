import { createAsyncThunk } from "@reduxjs/toolkit";

//const baseUrl = 'process.env.REACT_APP_BASE_URL';
const baseUrl = 'http://localhost:4000/api';

export const createLesson = createAsyncThunk('lesson/create', async (lessonData, {rejectWithValue}) => {
    const url = `${baseUrl}/lesson`;
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(lessonData)
    };

    try {
        const response = await fetch(url, settings);
        const data = await response.json();

        if (response.status === 201) {
            return {...lessonData, publicKey: data.publicKey};
        }
        rejectWithValue(data.message);
    } catch(err) {
        rejectWithValue(err.message);
    }
});