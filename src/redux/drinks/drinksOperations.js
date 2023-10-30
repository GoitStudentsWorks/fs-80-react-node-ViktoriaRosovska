import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-app.onrender.com/api/'; 

export const getMainPageAllDrinks = createAsyncThunk(
  'drinks/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/mainpage');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDrinkById = createAsyncThunk(
  'drinks/getDrinkById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/drinks/:${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPopularDrinks = createAsyncThunk(
  'drinks/getPopularDrinks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/drinks/popular');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getRequestedDrink = createAsyncThunk(
  'drinks/search',
  async ({ query, category, ingredient, limit, page }, thunkAPI) => {
    const urlParams = {
      params: {
        query,
        category,
        ingredient,
        limit,
        page,
      },
    };

    try {
      const response = await axios.get('/api/drinks/search', urlParams);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addMyDrink = createAsyncThunk(
  'drinks/own/add',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/drinks/own/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeDrink = createAsyncThunk(
  'drinks/favorite/remove/:id',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/api/drinks/favorite/remove/:${id}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeOwnDrink = createAsyncThunk(
  'drinks/own/remove/:id',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/drinks/own/remove/:${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getOwnDrinks = createAsyncThunk(
  'drinks/own/all',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/drinks/own/all?page=${page}&limit=${limit}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addDrinkToFavorite = createAsyncThunk(
  'drinks/favorite/add/:id',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/api/drinks/favorite/add/:${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getFavoriteAll = createAsyncThunk(
  'drinks/favorite/all',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/drinks/favorite/all?page=${page}&limit=${limit}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
