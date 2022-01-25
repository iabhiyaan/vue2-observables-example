<template>
  <div v-if="todoStore">
    <button @click="todoStore.setTodoLength = [{}]">SET</button>
    <br />

    Abhiyan: {{ todoStore.abhiyan.length }}
    <br />

    Total Todos:
    {{ this.todoStore.getTodoLength }}
    <br />
    <br />

    Completed Todos: {{ this.todoStore.getCompletedTodos.length }}
    <br />
    <br />

    <button @click="todoStore.todos.splice(0, 10)">Remove Ten</button>
    <br />
    <div style="display: flex; flex-wrap: wrap">
      <div
        v-for="todo in todoStore.todos"
        :key="todo.id"
        style="margin: 1rem; padding: 1rem; border: 1px solid red"
      >
        <h3>{{ todo.title }}</h3>
        <span>Status: {{ todo.completed ? "Completed" : "Incompleted" }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import todoStore from "../composables/useTodoStore";

export default {
  name: "Todos",
  async mounted() {
    const json = await fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await json.json();

    // setting global todoStore
    // this.$todoStore.todos = res;

    // setting todoStore locally
    this.todoStore = todoStore;
    this.todoStore.todos = res;
    console.log(this.todoStore);
  },
  data() {
    return {
      todoStore: null,
    };
  },
  computed: {
    getTodoLength() {
      return this.todoStore.todos.length;
    },
  },
};
</script>

<style>
</style>