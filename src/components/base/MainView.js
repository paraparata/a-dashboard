import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToggled, selectActiveMenu, toggle } from "../../store";
import wordsNormalizer from "../../libs/wordsNormalizer";

import styles from "./MainView.module.scss";
import { Button } from "../ui";
import { Close, Menu } from "../icons";

const MainView = ({ ...props }) => {
  const isMenuToggled = useSelector(selectToggled);
  const activeMenu = useSelector(selectActiveMenu);
  const dispatch = useDispatch();

  return (
    <div className={styles.root} {...props}>
      <header className={styles.header}>
        <div>
          <div>
            <Button onClick={() => dispatch(toggle())}>
              {isMenuToggled ? <Close /> : <Menu />}
            </Button>
            <span
              className={styles.content}
              style={{ background: "var(--color-yellow)", fontWeight: "bold" }}
            >
              {wordsNormalizer(activeMenu)}
            </span>
          </div>
          <div>
            <span className={styles.content}>Sub 1</span>
            <span className={styles.content}>Sub 2</span>
          </div>
        </div>
        <div>
          <div>
            <span className={styles.content}>Something 1</span>
          </div>
          <div>
            <span className={styles.content}>Sub Something 1</span>
            <span className={styles.content}>Sub Something 2</span>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>Content</div>
        <div>
          <div className={styles.content}>Content</div>
          <div className={styles.content}>Content</div>
          <div className={styles.content}>Content</div>
          <div className={styles.content}>Content</div>
        </div>
        <div className={styles.content}>Content</div>
        <div className={styles.content}>Content</div>
      </main>
    </div>
  );
};

export default MainView;
