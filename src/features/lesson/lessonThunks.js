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
        return rejectWithValue(data.message);
    } catch(err) {
        return rejectWithValue(err.message);
    }
});

export const getLessonsByUser = createAsyncThunk('lesson/readByUser', async (userId, {rejectWithValue}) => {
    const url = `${baseUrl}/lesson/?ownerId=${userId}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.status === 200) {
            return data.lessons;
        }
        return rejectWithValue(data.message);
    } catch(err) {
        return rejectWithValue(err.message);
    }
});