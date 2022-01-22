<template>
  <div id="app">
    <!-- Carts are: -->
    <!-- Using global technique: -->
    <!-- <pre>
      {{ $todoStore.todos }}
    </pre> -->
    <!-- <Product /> -->
    <!-- <Todos /> -->
    <!-- <Counter /> -->
    <Register />
  </div>
</template>

<script>
// import Product from "./components/Product";
// import Todos from "./components/Todos";
// import Counter from "./components/Counter";
import Register from "./components/Register";

export default {
  name: "App",
  components: {
    // Product,
    // Todos,
    // Counter,
    Register,
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
