import { createSlice } from "@reduxjs/toolkit";
import { createLesson } from "./lessonThunks";

const initialState = {
    lessons: null,
    currentLesson: null,
    isLoading: false,
    error: null
}

const lessonSlice = createSlice({
    name: 'lesson',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createLesson.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createLesson.fulfilled, (state, action) => {
                state.lessons = [...state.lessons, {title: action.payload.title, 
                                                    publicKey: action.payload.publicKey}];
                state.isLoading = false;
            })
            .addCase(createLesson.rejected, (state, action) => {
                state.isLoading = false,
                state.error = action.payload;
            })
    }
});

export default lessonSlice.reducer;