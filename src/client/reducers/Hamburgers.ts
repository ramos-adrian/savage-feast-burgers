// hamburgers.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hamburger } from '../types';

interface HamburgersState {
  hamburgers: Hamburger[];
}

const initialState: HamburgersState = {
  hamburgers: [],
};

const hamburgersSlice = createSlice({
  name: 'hamburgers',
  initialState,
  reducers: {
    setHamburgers: (state, action: PayloadAction<Hamburger[]>) => {
      state.hamburgers = action.payload;
    },
    addHamburger: (state, action: PayloadAction<Hamburger>) => {
      state.hamburgers.push(action.payload);
    },
    deleteHamburger: (state, action: PayloadAction<string>) => {
      state.hamburgers = state.hamburgers.filter(hamburger => hamburger.id !== action.payload);
    },
  },
});

export const { setHamburgers, addHamburger, deleteHamburger } = hamburgersSlice.actions;

export default hamburgersSlice.reducer;