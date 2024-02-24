import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todoList: JSON.parse(localStorage.getItem("todoList")) || [
      { id: 1, name: "Buy milk", description: "lorem ipsum sit dolor amet", completed: false },
    ],
    visibleTodos: "all",
  }),
  getters: {
    filteredTodos() {
      if (this.visibleTodos === "all") return this.todoList;
      if (this.visibleTodos === "completed")
        return this.todoList.filter((todo) => todo.completed);
      if (this.visibleTodos === "incomplete")
        return this.todoList.filter((todo) => !todo.completed);
    }
  },
  actions: {
    addTodo(newTodo) {
      if (newTodo.name.trim() === '' || newTodo.description.trim() === '') {
        // Prevent adding blank data
        alert("Please enter a valid name and description");
        return;
      }
      this.todoList.push({
        // use incrementing id and if the list is empty, use 1
        id: this.todoList.length ? this.todoList[this.todoList.length - 1].id + 1 : 1,
        name: newTodo.name,
        description: newTodo.description,
        completed: false,
      });
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      // clear the form
      newTodo.name = "";
      newTodo.description = "";
    },
    remove(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    toggleTodoStatus(id) {
      const todo = this.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
      }
    },
    toggleTodoVisibility(visibility) {
      this.visibleTodos = visibility;
    },
  },
});
