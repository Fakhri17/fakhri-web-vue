<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/todo-list">Todo List</RouterLink>
      </nav>
    </div>
  </header> -->
  <nav class="border fixed split-nav">
    <div class="nav-brand">
      <h3><a href="#">Vue Pinia</a></h3>
    </div>
    <div class="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible1">
      <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
      <div class="collapsible-body">
        <ul class="inline">
          <RouterLink to="/" class="margin">Home</RouterLink>
          <RouterLink to="/about" class="margin">About</RouterLink>
          <RouterLink to="/todo-list" class="margin">Todo List</RouterLink>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-vertical-horizontal">
    <div class="paper container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container-vertical-horizontal {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

