import Vue from "vue";

const todoStore = Vue.observable({
  todos: [],
  abhiyan: null,
  // computed property
  get getTodoLength() {
    return this.todos.length;
  },
  set setTodoLength(value) {
    todoStore.todos = value;
  },
  get getCompletedTodos() {
    return todoStore.todos && todoStore.todos.filter((todo) => todo.completed);
  }
});

const vm = new Vue({});

// watchers
vm.$watch(
  () => todoStore.todos,
  (newVal) => {
    todoStore.abhiyan = newVal;
  },
  {
    deep: true
  }
);

export default todoStore;
