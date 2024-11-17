// react
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
// items
import { headerNavigationItems } from "./headerNavigationItems";
// styles
import styles from "./HeaderNavigation.module.scss";

interface HeaderNavigationProps {}

export const HeaderNavigation: FC<HeaderNavigationProps> = ({}) => {
  return (
    <div className={styles.HeaderNavigation}>
      {headerNavigationItems.map((item) => {
        return (
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={item.path}
          >
            {item.text}
          </NavLink>
        );
      })}
    </div>
  );
};
