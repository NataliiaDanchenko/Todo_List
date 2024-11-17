// react
import { ChangeEvent, FC, useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
// thunk
import { searchTodo } from '@/enteties/todo/model/thunks/todoThunks';
// helpers
import { validateInput } from '@/widgets/todo/libs/helpers/validateInput';
// ui
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Error } from '@/shared/ui/Error';
// styles
import styles from './TodoSearch.module.scss';

interface TodoSearchProps {}

export const TodoSearch: FC<TodoSearchProps> = ({}) => {
  const [addQuery, setAddQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const searchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddQuery(e.target.value);
    if (error) {
      setError(null);
    }
  };

  const handleSearchTodo = () => {
    const validationError = validateInput(addQuery);
    if (validationError) {
      setError(validationError);
      return;
    }
    searchTodo(dispatch, addQuery);
    setAddQuery('');
  };

  return (
    <div className={styles.TodoSearch}>
      <div className={styles.form}>
        <div className={styles.input}>
          <Input
            value={addQuery}
            onChange={searchOnChange}
            placeholder='Search'
            type='text'
          />
        </div>

        <Button
          onClick={handleSearchTodo}
          children='Search'
          colorBackground='blue'
        />
      </div>

      <div className={styles.error}>
        {error && <Error errorMessage={error} />}
      </div>
    </div>
  );
};
