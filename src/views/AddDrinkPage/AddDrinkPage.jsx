import PageTitle from 'components/PageTitle/PageTitle';

import { MainContainer } from 'styles/App.styled';

import { useEffect } from 'react';

// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth/authOperations';

import AddDrinkForm from '../../components/Forms/AddDrinkForm/AddDrinkForm';
import FollowUs from 'components/FollowUs/FollowUs';

export default function AddDrinkPage() {
  useEffect(() => {}, []);
  return (
    <MainContainer>
      {/* <AddDrinkContainer> */}
      <PageTitle title="Add drink" />

      <AddDrinkForm />
      <div>
        <FollowUs />
      </div>
      <div>
        <h4>Popular drinks</h4>
        <div>Компонент Популярні напої</div>
      </div>
      {/* </AddDrinkContainer> */}
    </MainContainer>
  );
}
