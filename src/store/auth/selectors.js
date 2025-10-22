export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.IsRefreshing;
export const selectUser = state => state.auth.user;
export const selectIsRegistered = state => state.auth.isRegistered;
export const selectAuthErrors = state => state.auth.error;
