import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsFetchingCurrentUser,
  selectIsLoggedIn,
} from 'redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const shouldRedirect = !isLoggedIn && !isFetchingCurrentUser;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
