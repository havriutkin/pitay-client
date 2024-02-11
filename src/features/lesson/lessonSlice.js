import { createSlice } from "@reduxjs/toolkit";
import { createLesson, getLessonsByUser } from "./lessonThunks";

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
                state.error = null;
            })
            .addCase(createLesson.fulfilled, (state, action) => {
                state.lessons = [...state.lessons, {title: action.payload.title, 
                                                    publicKey: action.payload.publicKey}];
                state.isLoading = false;
            })
            .addCase(createLesson.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getLessonsByUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getLessonsByUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.lessons = action.payload;
            })
            .addCase(getLessonsByUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default lessonSlice.reducer;