import React from "react";
import styles from "./App.module.scss";
import { MainView, SideBar } from "./components/base";

const App = () => {
  return (
    <div className={styles.root}>
      <SideBar />
      <MainView style={{ flex: 1 }} />
    </div>
  );
};

export default App;
