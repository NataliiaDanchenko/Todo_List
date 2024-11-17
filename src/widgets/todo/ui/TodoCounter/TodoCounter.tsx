// react
import { FC } from 'react';
// redux
import { useSelector } from 'react-redux';
import { getTodoTodosLength } from '@/enteties/todo/model/selectors/todoSelectors';
// styles
import styles from './TodoCounter.module.scss';

interface TodoCounterProps {}

export const TodoCounter: FC<TodoCounterProps> = () => {
  const length = useSelector(getTodoTodosLength);

  console.log('Todo Counter Render');

  return (
    <div className={styles.TodoCounter}>
      <p>Number of todos: {length}</p>
    </div>
  );
};
