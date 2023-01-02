export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

  export const selectToken = state => state.auth.token;
