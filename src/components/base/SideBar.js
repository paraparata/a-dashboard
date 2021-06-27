import React from "react";
import { useSelector } from "react-redux";
import { selectToggled, selectMenus } from "../../store";
import styles from "./SideBar.module.scss";

import { Avatar, NavAccordionButton } from "../ui";
import logo from "../../static/logo.webp";
import avatar from "../../static/avatar.png";

const SideBar = () => {
  const isMenuToggled = useSelector(selectToggled);
  const menus = useSelector(selectMenus);

  return (
    <div className={styles.root} data-toggled={!isMenuToggled}>
      <div>
        <img src={logo} height="32" alt="Avana Logo" />
      </div>
      <div>
        <Avatar src={avatar} alt="Avatar Name" />
        <span>Avriza Bramantyo</span>
      </div>
      <ul>
        {menus.map((menu, index) => {
          return (
            <NavAccordionButton
              key={index}
              id={menu.id}
              isShowed={menu.isShowed}
              isAllowed={menu.isAllowed}
              childs={menu.childs}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
