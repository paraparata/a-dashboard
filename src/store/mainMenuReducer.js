import { createSlice } from "@reduxjs/toolkit";
import findNestedObj from "../libs/findNestedObj";

import DUMMY_DATA from "../static/dummy-menu";

export const slice = createSlice({
  name: "mainmenu",
  initialState: {
    toggled: true,
    menus: DUMMY_DATA,
    activeMenu: DUMMY_DATA[0].id,
  },
  reducers: {
    toggle: (state) => {
      state.toggled = !state.toggled;
    },
    enableMenu: (state, action) => {
      let targetMenu = findNestedObj(state.menus, "id", action.payload);
      targetMenu.isAllowed = !targetMenu.isAllowed;
    },
    showMenu: (state, action) => {
      let targetMenu = findNestedObj(state.menus, "id", action.payload);
      targetMenu.isShowed = !targetMenu.isShowed;
    },
    activateMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { toggle, enableMenu, showMenu, activateMenu } = slice.actions;

export const selectToggled = (state) => state.mainmenu.toggled;
export const selectMenus = (state) => state.mainmenu.menus;
export const selectActiveMenu = (state) => state.mainmenu.activeMenu;

export default slice.reducer;
