import { RootState } from '../rootReducer';

// Selector to get selected product
export const selectSearchQuery = (state: RootState) => state.search.searchQuery;
