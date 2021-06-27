import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activateMenu, selectActiveMenu } from "../../store";
import wordsNormalizer from "../../libs/wordsNormalizer";

import styles from "./NavAccordionButton.module.scss";
import { Chevron } from "../icons";

const NavAccordionButton = ({
  id,
  isShowed = true,
  isAllowed = true,
  childs = [],
}) => {
  const [isSubOpen, setIsSubOpen] = useState(isShowed);
  const activeMenu = useSelector(selectActiveMenu);
  const dispatch = useDispatch();

  const stateStyle = !isAllowed
    ? {
        cursor: "not-allowed",
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
    if (isAllowed) {
      setIsSubOpen((state) => !state);

      if (childs.length === 0) {
        dispatch(activateMenu(id));
      }
    }
  };

  return (
    <li className={styles.root}>
      <span style={stateStyle} onClick={handleOnSubOpen}>
        {wordsNormalizer(id)}
        {childs.length !== 0 && (
          <Chevron className={styles.chevron} data-expanded={!isSubOpen} />
        )}
      </span>

      {childs.length !== 0 && (
        <ul className={styles.showed} data-expanded={!isSubOpen}>
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
