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
    <Todos />
    <!-- <Counter /> -->
    <br />
    <br />

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

export default {
  name: "App",
  components: {
    // Product,
    Todos,
    Counter,
    Register,
    Reset,
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
