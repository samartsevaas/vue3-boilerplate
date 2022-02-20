import { defineStore } from "pinia";
import { useQuery } from "vue-query";
import todoService from "../api/jsonplaceholder-api/todo.service";
import { Todo } from "../shared/models/Todo.model";
import { TodoStore } from "../shared/types/store/TodoStore.type";

export const useTodoStore = defineStore("Todo", {
  state: (): TodoStore => ({
    todos: []
  }),
  getters: {
    getAll: (state): Todo[] => {
      return state.todos;
    },
    getById: state => {
      return (id: number) => {
        return state.todos.filter(todo => todo.id === id);
      };
    }
  },
  actions: {
    initialTodos() {
      const response = useQuery<Todo[]>("/todos", todoService.getAll, {
        onSuccess(data) {
          const ctx = useTodoStore.apply(this);
          ctx.todos = data;
        }
      });
      return response;
    },
    removeTodo(id: number): void {
      const todosWithoutRemoved = this.todos.filter(todo => todo.id !== id);
      this.todos = todosWithoutRemoved;
    }
  }
});
