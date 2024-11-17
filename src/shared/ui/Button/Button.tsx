// react
import { ReactNode, FC } from "react";
// libs
import classNames from "classnames";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;

  colorBackground: 'red' | 'yellow' | 'blue';
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, onClick, disabled, colorBackground, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.Button, {
        [styles.backgroundRed]: colorBackground === 'red',
        [styles.backgroundYellow]: colorBackground === 'yellow',
        [styles.backgroundBlue]: colorBackground === 'blue',
      })}
    >
      {icon}
      {children}
    </button>
  );
};
