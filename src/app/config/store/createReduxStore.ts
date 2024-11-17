// redux
import { todoReducer } from "@/enteties/todo/model/reducer/todoReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk as ThunkMiddleware } from "redux-thunk";
// reducers


export const createReduxStore = () => {
  const reducers = {
    todo: todoReducer
  }

  const rootReducer = combineReducers(reducers);

  // @ts-expect-error
  const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
