// react
import { FC } from "react";
// styles
import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
  return <div className={styles.NotFoundPage}>404</div>;
};
