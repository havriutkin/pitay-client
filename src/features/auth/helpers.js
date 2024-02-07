// Helper to set loading state and clear errors
export const startLoading = (state) => {
    state.loading = true;
    state.error = null;
};

// Helper to set the user on successful operation
export const operationSuccess = (state, action) => {
    state.isLoggedIn = true;
    state.loading = false;
    state.user = action.payload;
    state.error = null;
};

// Helper for handling operation failure
export const operationFailed = (state, action) => {
    state.loading = false;
    state.error = action.payload; // Adjust based on how you're handling errors
    state.user = null;
};