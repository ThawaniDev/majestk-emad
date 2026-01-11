import { combineReducers } from 'redux';
import headerReducer from './slices/header-slice';
import modalReducer from './slices/modal-slice';
import cartReducer from './slices/cart-slice';
import productSortReducer from './slices/product-sort-slice';
import productSearchReducer from './slices/product-search-slice';

const rootReducer = combineReducers({
  header: headerReducer,
  modal: modalReducer,
  cart: cartReducer,
  sort: productSortReducer,
  search: productSearchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
