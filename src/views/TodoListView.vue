
<template>
  <div>
    <h1>Ini halaman todo list</h1>
    <div>
     {{ todoStore }}
     <p>{{ todoStore.count }} :: {{ todoStore.doubleCount }} :: {{ todoStore.name }}</p>


     <div>
      <button @click="todoStore.increment ">Add</button>
      <br>
      <button @click="todoStore.decrement">Subtract</button>
     </div>
    </div>
  </div>
</template>

<script>
  import { useTodoStore } from '../stores/todoStore'

  export default {
    setup() {
      const todoStore = useTodoStore()

      return {
        todoStore
      }
    }
  }
</script>