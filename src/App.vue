<template>
  <div id="app">
    <!-- Carts are: -->
    <Todos />

    <!-- Using global technique: -->
    <pre>
      {{ $todoStore.todos }}
    </pre>
    <!-- <Product /> -->
  </div>
</template>

<script>
import Product from "./components/Product";
import Todos from "./components/Todos";

export default {
  name: "App",
  components: {
    Product,
    Todos,
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
