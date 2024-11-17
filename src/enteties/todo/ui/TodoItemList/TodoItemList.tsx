// react
import { FC } from 'react';
// ui
import { TodoItem } from '../TodoItem/TodoItem';
// types
import { ITodo } from '../../model/types/todoTypes';
// styles
import styles from './TodoItemList.module.scss';

interface TodoItemListProps {
  todos: ITodo[];
}

export const TodoItemList: FC<TodoItemListProps> = ({ todos }) => {
  return (
    <div className={styles.TodoItemList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
