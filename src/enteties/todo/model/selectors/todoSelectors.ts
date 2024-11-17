import { StateSchema } from "@/app/config/store/stateSchema";

export const getTodoState = (state: StateSchema) => state.todo

export const getTodoTodos = (state: StateSchema) => state.todo.todos

export const getTodoTodosLength = (state: StateSchema) => state.todo.todos.length

export const getTodoIsLoading = (state: StateSchema) => state.todo.isLoading

export const getTodoError = (state: StateSchema) => state.todo.error