import axios from "axios";

class Api {
  constructor() {
    this.todo = axios.create({ baseURL: "http://192.168.1.66:3001/" });
  }

  async getAllTodos() {
    let query = `/todos`;
    return await this.todo(query).then((res) => {
      return res.data;
    });
  }

  async getTodo(id) {
    let query = `/todos/${id}`;
    return await this.todo(query).then((res) => {
      return res.data;
    });
  }

  async deleteTodo(id) {
    let query = `/todos/delete=${id}`;
    return await this.todo.delete(query);
  }

  async deleteAllTodos() {
    let query = `/todos/delete/`;
    await this.todo.delete(query);
  }

  async createTodo(form) {
    let query = `/todos`;
    await this.todo.post(query, form);
  }

  async checkTodo(id) {
    let query = `/todos/check=${id}`;
    await this.todo.put(query);
  }
}

export default new Api();
