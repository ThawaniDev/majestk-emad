import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  searchQuery: string;
}

const initialState: FilterState = {
  searchQuery: '',
};

const productSearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // Reducer to set searching filter
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    // Resets all filters to initial state
    resetFilters: () => initialState,
  },
});

export const { setSearchQuery } = productSearchSlice.actions;

export default productSearchSlice.reducer;
