<template>
  <div>
    <h1>Ini halaman todo list</h1>
    <form @submit.prevent="todoStore.addTodo(newTodo)">
      <input type="text" v-model="newTodo.name" placeholder="Name" class="mb-2" />
      <input type="text" v-model="newTodo.description" placeholder="Description" class="mb-2" />
      <button type="submit">Add</button>
    </form>
    <button @click="todoStore.toggleTodoVisibility('all')">Show All</button>
    <button @click="todoStore.toggleTodoVisibility('completed')">Show Completed</button>
    <button @click="todoStore.toggleTodoVisibility('incomplete')">Show Incomplete</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="todoStore.filteredTodos" v-for="todo in todoStore.filteredTodos" :key="todo.id"
          :class="todo.completed ? 'background-success' : 'background-danger'">
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td>{{ todo.description }}</td>
          <td>
            <button @click="todoStore.toggleTodoStatus(todo.id)">Change Status</button>
            <button @click="todoStore.remove(todo.id)">Remove</button>
          </td>
        </tr>
        <tr v-if="todoStore.filteredTodos.length === 0">
          <td colspan="3">No todos found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import '@/assets/style.css'
import { useTodoStore } from '../stores/todoStore'

export default {
  setup() {
    const todoStore = useTodoStore()
    const newTodo = {
      name: '',
      description: '',
      completed: false
    }
    return {
      todoStore,
      newTodo
    }
  },
}
</script>