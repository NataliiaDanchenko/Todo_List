// react
import { FC } from 'react';
// styles
import styles from './Error.module.scss';

interface ErrorProps {
  errorMessage: string;
}

export const Error: FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className={styles.Error}>{errorMessage}</div>
  );
};
