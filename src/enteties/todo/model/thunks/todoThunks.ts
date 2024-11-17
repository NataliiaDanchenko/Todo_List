import { Dispatch } from "redux";
import { TodoActions } from "@/enteties/todo/model/types/todoActions";
import { todoActionCreators } from "@/enteties/todo/model/actionCreators/todoActionCreators";
import { todoServices } from "@/enteties/todo/model/services/todoServices";
import { ITodo } from "@/enteties/todo/model/types/todoTypes";

export const getTodos = (dispatch: Dispatch<TodoActions>) => {
  const { setError, setIsLoading, setTodos } = todoActionCreators

  dispatch(setIsLoading(true))

  todoServices.getTodos().then((data) => {
    dispatch(setTodos(data.data))
  }).catch((error) => {
    dispatch(setError(error))
  }).finally(() => {
    dispatch(setIsLoading(false))
  })
}

export const addTodo = (dispatch: Dispatch<TodoActions>, newTodo: ITodo) => {
  const { setError, setIsLoading } = todoActionCreators;

  dispatch(setIsLoading(true));

  todoServices.addTodos(newTodo)
    .then(() => {
      getTodos(dispatch)
    })
    .catch((error) => {
      dispatch(setError(error));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    })
}

export const deleteTodo = (dispatch: Dispatch<TodoActions>, id: string) => {
  const { setError, setIsLoading } = todoActionCreators;

  dispatch(setIsLoading(true));

  todoServices.deleteTodos(id)
    .then(() => {
      getTodos(dispatch);
    })
    .catch((error) => {
      dispatch(setError(error));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    })
}

export const updateTodo = (dispatch: Dispatch<TodoActions>, id: string, todo: ITodo) => {
  const { setError, setIsLoading } = todoActionCreators;

  dispatch(setIsLoading(true));

  todoServices.updateTodos(id, todo)
    .then(() => {
      getTodos(dispatch);
    })
    .catch((error) => {
      dispatch(setError(error));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    })
}

export const searchTodo = (dispatch: Dispatch<TodoActions>, query: string) => {
  const { setTodos, setError, setIsLoading } = todoActionCreators;

  dispatch(setIsLoading(true));

  todoServices.getTodoSearch(query)
    .then((data) => {
      dispatch(setTodos(data.data));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    })
}