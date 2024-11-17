// react
import { FC, useEffect } from 'react';
// redux
import { useSelector } from 'react-redux';
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
import { getTodoState } from '@/enteties/todo/model/selectors/todoSelectors';
// thunk
import { getTodos } from '@/enteties/todo/model/thunks/todoThunks';
// ui
import { TodoItemList } from '@/enteties/todo/ui/TodoItemList/TodoItemList';

interface TodoListProps {}

export const TodoList: FC<TodoListProps> = ({}) => {
  const { error, isLoading, todos } = useSelector(getTodoState);
  // const todos = useSelector(getTodoError);
  // const isLoading = useSelector(getTodoIsLoading);
  // const error = useSelector(getTodoError);

  console.log('Todo List');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos);
  }, []);

  if (isLoading) {
    return <div>{isLoading}</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <TodoItemList todos={todos} />;
};
