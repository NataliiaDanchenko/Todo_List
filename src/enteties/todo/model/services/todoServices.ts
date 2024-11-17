import { jsonTodos } from "@/shared/api/jsonTodo"
import { ITodo } from "../types/todoTypes"

class TodoServices {
  private todoEndpoint = '/tasks'

  async getTodos() {
    return jsonTodos.get<ITodo[]>(this.todoEndpoint);
  }

  async addTodos(todo: ITodo) {
    return jsonTodos.post<ITodo>(this.todoEndpoint, todo);
  }

  async deleteTodos(id: string) {
    return jsonTodos.delete<ITodo>(`${this.todoEndpoint}/${id}`);
  }

  async updateTodos(id: string, todo: ITodo) {
    return jsonTodos.put<ITodo>(`${this.todoEndpoint}/${id}`, todo);
  }

  async getTodoSearch(query: string) {
    console.log('Query parameter:', query);
    return jsonTodos.get<ITodo[]>(`${this.todoEndpoint}?search=${encodeURIComponent(query)}`);
  }
}

export const todoServices = new TodoServices;