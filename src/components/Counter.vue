<template>
  <div>
    Count: {{ counter.state.count }}
    <button @click="counter.incrementCounter">Increment</button>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
export default {
  name: "Counter",
  created() {
    this.counter = useCounter();
  },
  data() {
    return {
      counter: null,
    };
  },
};
</script>

<style>
</style>