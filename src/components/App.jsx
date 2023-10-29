import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'views/HomePage/HomePage';
import { DrinksPage } from 'views/DrinksPage/DrinksPage';
import AddDrinkPage from 'views/AddDrinkPage/AddDrinkPage';
import { MyDrinksPage } from 'views/MyDrinksPage/MyDrinksPage';
import { FavoriteDrinksPage } from 'views/FavouriteDrinksPage/FavouriteDrinksPage';

import SharedLayout from './SharedLayout/SharedLayout';
import ErrorPage from '../views/ErrorPage/ErrorPage';
import PublicRoute from 'helpers/PublicRoute';
import PrivateRoute from 'helpers/PrivateRoute';
import WelcomePage from 'views/WelcomePage/WelcomePage';
import DrinkIdPage from 'views/DrinkIdPage/DrinkIdPage';
import { useEffect } from 'react';
import SignInPage from 'views/SignInPage/SignInPage';
import SignUpPage from 'views/SignUpPage/SignUpPage';
// import { useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/authSelectors';

const isLoggedIn = true;

export const App = () => {
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  useEffect(() => {}, []);
  return (
    <>
      <Routes>
        <Route
          element={
            <PrivateRoute redirectTo="/welcome" isLoggedIn={isLoggedIn} />
          }
        >
          <Route path="/" element={<SharedLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/drinks" element={<DrinksPage />} />
            <Route path="/drinks/Id" element={<DrinkIdPage />} />
            <Route path="/add" element={<AddDrinkPage />} />
            <Route path="/my" element={<MyDrinksPage />} />
            <Route path="/favorites" element={<FavoriteDrinksPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Route>
        <Route
          element={<PublicRoute redirectTo="/home" isLoggedIn={isLoggedIn} />}
        >
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
};
