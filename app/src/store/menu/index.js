import {createSlice} from '@reduxjs/toolkit';

export const MenuSlice = createSlice({
  name: 'menu',
  initialState: {
    menus: [],
  },
  reducers: {
    init: (state, action) => {
      state.menus = action.payload;
    },
  },
});

export const {init} = MenuSlice.actions;
export default MenuSlice.reducer;
