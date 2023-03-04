<script lang="ts">
  import { createTodo, todoStore } from "../state/todo-store";

  export default {
    data: () => {
      return {
        todoName: ""
      }
    },
    methods: { 
      handleSubmit() {
        createTodo({
          label: this.$data.todoName,
          id: Math.random().toString(),
          checked: false,
        });
        
        this.$data.todoName = "";
      }
    }
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input placeholder="Create Your To-Do!" v-model="todoName"/>

    <button type="submit">Create To-Do</button>
  </form>
</template>