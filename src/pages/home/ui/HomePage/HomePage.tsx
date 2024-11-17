import { useNavigate } from "react-router-dom";
import { getProfileRoute } from "@/shared/libs/constants/routes";
// styles
import styles from "./HomePage.module.scss";

export const HomePage = ({}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(getProfileRoute());
  };

  return (
    <div
      className={styles.HomePage}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <div>Home</div>
      <div onClick={onClick}>To Profile</div>
    </div>
  );
};
