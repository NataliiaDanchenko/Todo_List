// react
import { FC, useState, ChangeEvent } from 'react';
// redux
import { useDispatch } from 'react-redux';
// thunk
import { addTodo } from '@/enteties/todo/model/thunks/todoThunks';
// types
import { ITodo } from '@/enteties/todo/model/types/todoTypes';
// helpers
import { validateInput } from '../../libs/helpers/validateInput';
// ui
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Error } from '@/shared/ui/Error'; 
// styles
import styles from './TodoAdd.module.scss';

interface TodoAddProps {}

export const TodoAdd: FC<TodoAddProps> = () => {
  const [addTodoName, setAddTodoName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  console.log('Todo Add');

  const todoOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTodoName(e.target.value);
    if (error) {
      setError(null);
    }
  };

  const handleAddTodo = () => {
    const validationError = validateInput(addTodoName);
    const newTodo: ITodo = {
      createdAt: new Date().toISOString(),
      name: addTodoName,
      id: '',
    };
    if (validationError) {
      setError(validationError);
      return;
    }
    addTodo(dispatch, newTodo);
    setAddTodoName('');
  };

  return (
    <div className={styles.TodoAdd}>
      <div className={styles.form}>
        <div className={styles.input}>
          <Input
            value={addTodoName}
            onChange={todoOnChange}
            placeholder='Add Todo'
            type='text'
          />
        </div>
        <Button
          onClick={handleAddTodo}
          children='SUBMIT'
          colorBackground='blue'
        />
      </div>
      <div className={styles.error}>
        {error && <Error errorMessage={error} />}
      </div>
    </div>
  );
};
