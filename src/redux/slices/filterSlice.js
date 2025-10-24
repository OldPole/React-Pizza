import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryIndex: 0,
  sortType: {
    title: 'популярности (убыв.)',
    type: '-rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.categoryIndex = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryIndex = +action.payload.categoryIndex;
      state.sortType = action.payload.sortType;
    },
  },
});

export const { setActiveCategory, setSortType, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
