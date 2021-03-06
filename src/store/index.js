import { configureStore } from "@reduxjs/toolkit";
import mainMenuReducer from "./mainMenuReducer";

export {
  default as mainMenuReducer,
  slice,
  toggle,
  enableMenu,
  showMenu,
  activateMenu,
  selectToggled,
  selectMenus,
  selectActiveMenu,
} from "./mainMenuReducer";

export default configureStore({
  reducer: {
    mainmenu: mainMenuReducer,
  },
});
