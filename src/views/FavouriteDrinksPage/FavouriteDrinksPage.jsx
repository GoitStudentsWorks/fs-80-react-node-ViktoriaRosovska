import React, { useEffect, useState } from 'react';
import DrinkList from 'components/DrinkList/DrinkList';
import PageTitle from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import { MainContainer } from 'styles/App.styled';
import { useDrink } from 'hooks/useDrink';
import { useDispatch } from 'react-redux';
import { getFavoriteAll } from 'redux/drinks/drinksOperations';
import NotFound from 'components/NotFound/NotFound';

export default function FavoriteDrinksPage() {
  const dispatch = useDispatch();
  const { total, favoriteDrinks } = useDrink();

  const [currentPage, setCurrentPage] = useState(1);

  const drinksPerPage = 9;

  const onPageChange = pageNum => {
    setCurrentPage(pageNum);
  };

  const totalPages = Math.ceil(total / drinksPerPage);

  useEffect(() => {
    dispatch(getFavoriteAll({ page: currentPage, limit: drinksPerPage })).unwrap().catch(error => console.log(error));
  }, [dispatch, currentPage, totalPages, total]);

  console.log(total)
  return (
    <MainContainer>
      <PageTitle title="Favorites" />
      {total > 0 ? (<DrinkList drinks={favoriteDrinks} />) : (<NotFound/>)}
      
      {totalPages > 1 && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          path={'/favorites'}
        />
      )}
    </MainContainer>
  );
}
