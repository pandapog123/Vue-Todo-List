<script lang="ts">
  import type { todo } from '../models/todo';
  import { checkTodo, todoStore } from '../state/todo-store';

  export default {
    data: () => {
      return {
        checkTodo,
        todoStore
      }
    }
  }
</script>

<template>
  <ul>
    <li v-for="todo in todoStore" v-bind:key="todo.id">
      <input type="checkbox" :id="todo.id" :checked="todo.checked" @change="checkTodo(todo)" />

      <label :for="todo.id">{{ todo.label }}</label>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
  }
</style>