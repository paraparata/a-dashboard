import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { activateMenu, selectActiveMenu } from "../../store";
import wordsNormalizer from "../../libs/wordsNormalizer";

import styles from "./NavAccordionButton.module.scss";
import { Chevron, Eye, EyeSlash, Pin } from "../icons";

const NavAccordionButton = ({
  id,
  isShowed = true,
  isAllowed = true,
  childs = [],
}) => {
  const activeMenu = useSelector(selectActiveMenu);
  const dispatch = useDispatch();

  const stateStyle = !isAllowed
    ? {
        color: "var(--color-grey-base)",
        background: "var(--color-yellow-dark-transparent)",
      }
    : id === activeMenu
    ? {
        color: "black",
        background: "var(--color-yellow)",
      }
    : undefined;

  const handleOnSubOpen = () => {
    dispatch(activateMenu(id));
  };

  return (
    <li className={styles.root}>
      <div style={stateStyle} onClick={handleOnSubOpen}>
        <div>
          {childs.length !== 0 && (
            <Chevron className={styles.chevron} data-expanded={!isShowed} />
          )}
          <span>{wordsNormalizer(id)}</span>
          {id === activeMenu && <Pin color="red" />}
        </div>
        <div>{isShowed ? <Eye /> : <EyeSlash />}</div>
      </div>

      {childs.length !== 0 && (
        <ul className={styles.showed} data-expanded={!isShowed}>
          {childs.map((child, index) => {
            return (
              <NavAccordionButton
                key={index}
                id={child.id}
                isShowed={child.isShowed}
                isAllowed={child.isAllowed}
                childs={child.childs}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NavAccordionButton;
