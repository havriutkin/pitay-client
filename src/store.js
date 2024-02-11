import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import lessonReducer from "./features/lesson/lessonSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        lesson: lessonReducer
    },
})