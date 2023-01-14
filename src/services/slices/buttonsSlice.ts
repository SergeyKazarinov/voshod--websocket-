
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const buttonsSlice = createSlice({
  name: 'buttons',
  initialState: {
    buttonActiveBlockOne: false,
    buttonActiveBlockTwo: false,
    buttonActiveBlockThree: false
  },
  reducers: {
    setButtonBlockOne(state) {
      state.buttonActiveBlockOne = !state.buttonActiveBlockOne;
    },
    setButtonBlockTwo(state) {
      state.buttonActiveBlockTwo = !state.buttonActiveBlockTwo;
    },
    setButtonBlockThree(state) {
      state.buttonActiveBlockThree = !state.buttonActiveBlockThree;
    },
    setAllButton(state, action: PayloadAction<boolean>) {
      state.buttonActiveBlockOne = action.payload;
      state.buttonActiveBlockTwo = action.payload;
      state.buttonActiveBlockThree = action.payload;
    }
  } 
});

export default buttonsSlice.reducer;
export const {
  setButtonBlockOne,
  setButtonBlockTwo,
  setButtonBlockThree,
  setAllButton,
} = buttonsSlice.actions;