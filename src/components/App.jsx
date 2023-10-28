import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'views/HomePage/HomePage';
import { DrinksPage } from 'views/DrinksPage/DrinksPage';
import AddDrinkPage from 'views/AddDrinkPage/AddDrinkPage';
import { MyDrinksPage } from 'views/MyDrinksPage/MyDrinksPage';
import { FavoriteDrinksPage } from 'views/FavouriteDrinksPage/FavouriteDrinksPage';

import SharedLayout from './SharedLayout/SharedLayout';
import ErrorPage from './ErrorPage/ErrorPage';
import SigninForm from './AuthForm/SigninForm/SigninForm';
import SignupForm from './AuthForm/SignupForm/SignupForm';
import PublicRoute from 'helpers/PublicRoute';
import PrivateRoute from 'helpers/PrivateRoute';
import WelcomePage from 'views/WelcomePage/WelcomePage';
import DrinkIdPage from 'views/DrinkIdPage/DrinkIdPage';
// import { useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/authSelectors';

const isLoggedIn = false;

export const App = () => {
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      <Routes>
        <Route
          element={<PublicRoute redirectTo="/home" isLoggedIn={isLoggedIn} />}
        >
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>

        <Route
          element={
            <PrivateRoute redirectTo="/welcome" isLoggedIn={isLoggedIn} />
          }
        >
          <Route path="/" element={<SharedLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/drinks" element={<DrinksPage />} />
            <Route path="/drink/:drinkId" element={<DrinkIdPage />} />
            <Route path="/add" element={<AddDrinkPage />} />
            <Route path="/my" element={<MyDrinksPage />} />
            <Route path="/favorites" element={<FavoriteDrinksPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
