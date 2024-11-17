import axios from "axios";

export const jsonTodos = axios.create({
  baseURL: 'https://671d225709103098807c5dd0.mockapi.io'
})

