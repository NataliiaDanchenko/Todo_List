// react
import { FC } from "react";
// styles
import styles from "./ProfilePage.module.scss";

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = ({}) => {
  return <div className={styles.ProfilePage}>Profile</div>;
};
