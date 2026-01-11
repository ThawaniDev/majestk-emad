import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type Declaration
interface HeaderState {
  isVisible: boolean;
  isOffCanvasOpen: boolean;
  isPopUpOpen: boolean;
}

// Initial State
const initialState: HeaderState = {
  isVisible: false,
  isOffCanvasOpen: false,
  isPopUpOpen: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    // Reducer to update the visibility state of a header or component.
    setIsVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },

    // Reducer to toggle the state of an off-canvas menu.
    toggleOffCanvas(state, action: PayloadAction<boolean>) {
      state.isOffCanvasOpen = action.payload;
    },

    // Reducer to toggle the state of a popup modal.
    togglePopUp(state, action: PayloadAction<boolean>) {
      state.isPopUpOpen = action.payload;
    },
  },
});

export const { setIsVisible, toggleOffCanvas, togglePopUp } =
  headerSlice.actions;

export default headerSlice.reducer;
