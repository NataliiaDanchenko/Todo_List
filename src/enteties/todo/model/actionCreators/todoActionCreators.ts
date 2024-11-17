import { TodoActionTypes } from "../actionTypes/todoActionTypes"
import { TodoSetErrorType, TodoSetIsLoadingType, TodoSetPostsType } from "../types/todoActions"

export const setIsLoading = (payload: TodoSetIsLoadingType['payload']): TodoSetIsLoadingType => {
  return {
    type: TodoActionTypes.SET_IS_LOADING,
    payload: payload
  }
}

export const setError = (payload: TodoSetErrorType['payload']): TodoSetErrorType => {
  return {
    type: TodoActionTypes.SET_ERROR,
    payload: payload
  }
}

export const setTodos = (payload: TodoSetPostsType['payload']): TodoSetPostsType => {
  return {
    type: TodoActionTypes.SET_TODOS,
    payload: payload
  }
}

export const todoActionCreators = {
  setIsLoading, setError, setTodos
}