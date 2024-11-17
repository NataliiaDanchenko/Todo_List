import { TodoActionTypes } from "../actionTypes/todoActionTypes"
import { TodoStateSchema } from "./todoTypes"

export type TodoSetIsLoadingType = {
  type: TodoActionTypes.SET_IS_LOADING,
  payload: TodoStateSchema['isLoading']
}

export type TodoSetErrorType = {
  type: TodoActionTypes.SET_ERROR,
  payload: TodoStateSchema['error']
}

export type TodoSetPostsType = {
  type: TodoActionTypes.SET_TODOS,
  payload: TodoStateSchema['todos']
}

export type TodoActions = TodoSetErrorType | TodoSetIsLoadingType | TodoSetPostsType