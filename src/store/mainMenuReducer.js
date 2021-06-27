import { createSlice } from "@reduxjs/toolkit";
import DUMMY_DATA from "../static/dummy-menu";

export const slice = createSlice({
  name: "mainmenu",
  initialState: {
    toggled: false,
    menus: DUMMY_DATA,
    activeMenu: DUMMY_DATA[0].id,
  },
  reducers: {
    toggle: (state) => {
      state.toggled = !state.toggled;
    },
    activateMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { toggle, activateMenu } = slice.actions;

export const selectToggled = (state) => state.mainmenu.toggled;
export const selectMenus = (state) => state.mainmenu.menus;
export const selectActiveMenu = (state) => state.mainmenu.activeMenu;

export default slice.reducer;
