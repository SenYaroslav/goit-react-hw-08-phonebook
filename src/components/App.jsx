import React, { useEffect, lazy } from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { authRefresh } from 'redux/auth/authOperations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('Pages/Home'));
const Register = lazy(() => import('Pages/Register'));
const LogIn = lazy(() => import('Pages/LogIn'));
const Contacts = lazy(() => import('Pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRefresh());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  return isFetchingCurrentUser ? (
    <p>Please wait while the minions do their work...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
