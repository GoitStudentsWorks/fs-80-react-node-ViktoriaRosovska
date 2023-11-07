import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { addMyDrink } from 'redux/drinks/drinksOperations';

import { FormContainer } from './AddDrinkForm.styled';
import WhiteLinkBtn from '../../Buttons/WhiteLinkBtn/WhiteLinkBtn';
import { DrinkDescriptionFields } from '../../DrinkDescriptionFields/DrinkDescriptionFields';
import Loader from 'components/Loader';
import DrinkIngridientsFields from 'components/DrinkIngredientsFields/DrinkIngredientsFields';
import DrinkRecipePreparation from 'components/DrinkRecipePreparation/DrinkRecipePreparation';

import { useDispatch } from 'react-redux';
import { toastConfig } from 'components/Notification/notification_options';

export default function AddDrinkForm() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      drinkThumb: null,
      drink: '',
      description: '',
      category: '',
      glass: '',
      alcoholic: 'Non alcoholic',
      instructions: '',
      ingredients: [
        {
          title: '',
          measure: '',
          ingredientId: '',
        },
      ],
    },
    validationSchema: Yup.object().shape({
      drink: Yup.string().max(40).required('This field is required'),
      description: Yup.string().required('This field is required'),
      category: Yup.string().required('This field is required'),
      glass: Yup.string().required('This field is required'),
      alcoholic: Yup.string().required('Select a type of drink'),
      instructions: Yup.string().required('This field is required'),
      ingredients: Yup.array(
        Yup.object().shape({
          ingredientId: Yup.string().required('Tris field is required'),
          measure: Yup.string().required('This field is required'),
        })
      ).required('This field is required'),
      drinkThumb: Yup.mixed().required('Select a drink image'),
    }),
    onSubmit: async values => {
      const formData = new FormData();
      formData.append('drink', values.drink);
      formData.append('description', values.description);
      formData.append('category', values.category);
      formData.append('glass', values.glass);
      formData.append('alcoholic', values.alcoholic);
      formData.append('instructions', values.instructions);
      formData.append('ingredients', JSON.stringify(values.ingredients));
      formData.append('drinkThumb', values.drinkThumb);
      setIsLoading(true);
      try {
        const responce = await dispatch(addMyDrink(formData));
        if (responce) {
          navigate('/my');

          toastConfig.success(`Your recipe was adding success`);
        } else {
          // console.log('Server error', responce.statusText);
          toastConfig.error(
            `There are some problems with server. Please, try again at several time`
          );
        }
      } catch (error) {
        toastConfig.error(`Sending error. Please, try again`);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FormContainer onSubmit={formik.handleSubmit}>
          <DrinkDescriptionFields
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
          />
          <DrinkIngridientsFields
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
          />

          <DrinkRecipePreparation
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
          />
          <WhiteLinkBtn type="submit" title="Add" />
        </FormContainer>
      )}
    </>
  );
}
