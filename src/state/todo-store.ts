import { todo } from "./../models/todo";
import { ref } from "vue";

export let todoStore = ref<todo[]>(
  JSON.parse(localStorage.getItem("todos") || "[]")
);

function save() {
  localStorage.setItem("todos", JSON.stringify(todoStore.value));
}

export function checkTodo(todo: todo) {
  let indexOfTodo = todoStore.value.indexOf(todo);

  todoStore.value[indexOfTodo].checked = !todoStore.value[indexOfTodo].checked;

  save();
}

export function createTodo(todo: todo) {
  todoStore.value.push(todo);

  save();
}

export function removeCheckedTodos() {
  todoStore.value = todoStore.value.filter((todo) => !todo.checked);

  save();
}
