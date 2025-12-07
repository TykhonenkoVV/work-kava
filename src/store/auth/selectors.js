export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsUpdated = state => state.auth.isUpdated;
export const selectUser = state => state.auth.user;
export const selectLocale = state => state.auth.locale;
export const selectIsRegistered = state => state.auth.isRegistered;
export const selectAuthErrors = state => state.auth.error;
