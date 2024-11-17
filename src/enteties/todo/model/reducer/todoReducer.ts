import { Reducer } from "redux";
import { TodoStateSchema } from "../types/todoTypes";
import { TodoActions } from "../types/todoActions";
import { TodoActionTypes } from "../actionTypes/todoActionTypes";

const initialState: TodoStateSchema = {
  error: '',
  isLoading: false,
  todos: []
}

export const todoReducer: Reducer<TodoStateSchema, TodoActions> = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionTypes.SET_TODOS: {
      return { ...state, todos: action.payload }
    }

    case TodoActionTypes.SET_ERROR: {
      return { ...state, error: action.payload }
    }

    case TodoActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload }
    }

    default: {
      return { ...state }
    }
  }

}