import Vue from "vue";

const todoStore = Vue.observable({
  todos: []
});

// computed properties
Object.defineProperty(todoStore, "getTodoLength", {
  enumerable: true,
  get() {
    return todoStore.todos.length;
  }
});

Object.defineProperty(todoStore, "getCompletedTodos", {
  enumerable: true,
  get() {
    return todoStore.todos && todoStore.todos.filter((todo) => todo.completed);
  }
});

export default todoStore;
