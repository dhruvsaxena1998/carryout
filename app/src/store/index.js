import {configureStore} from '@reduxjs/toolkit';

// Slices
import MenuSlice from './menu';

export default configureStore({
  reducer: {
    menu: MenuSlice,
  },
});
