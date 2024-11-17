// react
import { FC } from 'react';
// ui
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoAdd } from '../TodoAdd/TodoAdd';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
// styles
import styles from './Todo.module.scss';

export const Todo: FC = () => {
  return (
    <div className={styles.Todo}>
      <div style={{ textAlign: 'center', fontSize: '24px', padding: '30px 0' }}>
        Todo-List-App
      </div>
      <div className={styles.container}>
        <TodoSearch />
        <TodoAdd />
        <TodoList />
        <TodoCounter />
      </div>
    </div>
  );
};
