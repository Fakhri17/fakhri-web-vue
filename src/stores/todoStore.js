import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

// const useTodoStore = defineStore("todo", {
//   // state is a function that returns an object
//   state: () => ({
//     todos: [
//       { id: 1, text: "Buy milk", completed: false },
//       { id: 2, text: "Buy eggs", completed: false },
//       { id: 3, text: "Buy bread", completed: false },
//     ],
//   }),
//   // actions are functions that modify the state
//   actions: {
//     add(text) {
//       this.todos.push({
//         id: this.todos.length + 1,
//         text,
//         completed: false,
//       });
//     },
//     remove(id) {
//       this.todos = this.todos.filter((todo) => todo.id !== id);
//     },
//     toggle(id) {
//       const todo = this.todos.find((todo) => todo.id === id);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//   },
// });

export const useTodoStore = defineStore("todo", {
  state: () => ({ count: 2, name: "Fakhri" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

