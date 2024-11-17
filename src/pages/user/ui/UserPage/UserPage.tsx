// react
import { useParams } from "react-router-dom";
import { FC } from "react";
// styles
import styles from "./UserPage.module.scss";

interface UserPageProps {}

export const UserPage: FC<UserPageProps> = ({}) => {
  const { id } = useParams();

  return <div className={styles.UserPage}>{id}</div>;
};
