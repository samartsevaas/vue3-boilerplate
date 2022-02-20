import BaseClient from "../base/BaseClient";
import JPClient from "./client";
import { Todo } from "/@/shared/models/Todo.model";

class TodoService {
  protected _http: BaseClient = JPClient;

  getAll = async (): Promise<Todo[]> => {
    return this._http.get("/todos");
  };

  create = async (payload: Todo): Promise<Todo> => {
    return this._http.post("/todos", payload);
  };

  getById = async (id: number): Promise<Todo> => {
    return this._http.get(`/todos/${id}`);
  };
}

export default new TodoService();
