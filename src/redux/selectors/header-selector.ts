import { RootState } from '../rootReducer';

// Selector for header visibility
export const selectIsVisible = (state: RootState) => state.header.isVisible;

// Selector for off-canvas state
export const selectIsOffCanvasOpen = (state: RootState) =>
  state.header.isOffCanvasOpen;

// Selector for popup state
export const selectIsPopUpOpen = (state: RootState) => state.header.isPopUpOpen;
