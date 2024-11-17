export interface ITodo {
  createdAt: string
  id: string
  name: string
}

export interface TodoStateSchema {
  todos: ITodo[]
  isLoading: boolean
  error: string
}