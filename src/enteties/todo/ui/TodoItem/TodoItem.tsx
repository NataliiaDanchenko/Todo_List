// react
import { ChangeEvent, FC, useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
// thunk
import {
  deleteTodo,
  updateTodo,
} from '@/enteties/todo/model/thunks/todoThunks';
// types
import { ITodo } from '@/enteties/todo/model/types/todoTypes';
// ui
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
// svg
import IconEdit from '@/shared/assets/icon-edit.svg?react';
import IconDelete from '@/shared/assets/icon-delete.svg?react';
// styles
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [updateTodoName, setUpdateTodoName] = useState<string>('');
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const todoUpdateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateTodoName(e.target.value);
  };

  const handleDeletePost = (id: string) => {
    deleteTodo(dispatch, id);
  };

  const handleUpdatePost = () => {
    if (todo.id) {
      const updateNewTodo: ITodo = {
        createdAt: new Date().toISOString(),
        name: updateTodoName,
        id: todo.id,
      };
      updateTodo(dispatch, todo.id, updateNewTodo);
      setUpdateTodoName('');
      setOpenModal(false);
    }
  };

  return (
    <div className={styles.TodoItem}>
      <div className={styles.todo}>
        <div>{`${todo.name.charAt(0).toUpperCase()}${todo.name.slice(1)}`}</div>
        <div className={styles.buttons}>
          <Button
            onClick={() => {
              setUpdateTodoName(todo.name);
              setOpenModal(true);
            }}
            children=''
            icon={<IconEdit />}
            colorBackground='yellow'
          />
          <Button
            onClick={() => handleDeletePost(todo.id)}
            children=''
            icon={<IconDelete />}
            colorBackground='red'
          />
        </div>

        {openModal && (
          <Modal openModal={true} setOpenModal={() => setOpenModal(true)}>
            <div className={styles.addTodo}>
              <h2>Update Todo</h2>
              <Input
                placeholder='Edit'
                value={updateTodoName}
                onChange={todoUpdateChange}
                type='text'
              />
              <Button
                onClick={handleUpdatePost}
                children='Update'
                icon={<IconEdit />}
                colorBackground='yellow'
              />
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
