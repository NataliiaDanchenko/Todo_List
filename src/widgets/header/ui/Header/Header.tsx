// react
import { FC } from "react";
// ui
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
// styles
import styles from "./Header.module.scss";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.Header}>
      <HeaderNavigation />
    </div>
  );
};
