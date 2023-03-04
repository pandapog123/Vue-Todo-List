<script setup lang="ts">
  import TodoList from './components/TodoList.vue';
  import TodoListForm from './components/TodoListForm.vue';
  import { removeCheckedTodos, todoStore } from "./state/todo-store"
</script>

<template>

  <h1>Todo List App</h1>

  <TodoListForm/>

  <TodoList/>

  <button @click="removeCheckedTodos">Clear All Completed To-do's</button>
</template>
