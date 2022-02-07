<template>
  <div id="app">
    <header>This is header</header>
    <br />
    <br />

    <br />

    <br />

    <!-- Carts are: -->
    <!-- Using global technique: -->
    <!-- <pre>
      From App hai: {{ $todoStore.todos.length }}
    </pre> -->
    <!-- <Product /> -->
    <Todos style="display: none" />
    <!-- <Counter /> -->
    <br />
    <br />
    <Task />
    <br />
    <br />
    <Lead />

    <!-- <div style="display: flex">
      <div style="margin-right: 24px">
        <Register />
      </div>
      <Reset />
    </div> -->
  </div>
</template>

<script>
// import Product from "./components/Product";
import Todos from "./components/Todos";
import Counter from "./components/Counter";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Task from "./components/Task";
import Lead from "./components/Lead";

export default {
  name: "App",
  components: {
    Task,
    Lead,
    Todos,
    // Product,
    // Counter,
    // Register,
    // Reset,
  },
  mounted() {},
};
</script>

<style>
</style>
