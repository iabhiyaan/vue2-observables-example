import Vue from "vue";

export default function useCounter() {
  const state = Vue.observable({
    count: 0
  });

  function incrementCounter() {
    state.count++;
  }

  return {
    state,
    incrementCounter
  };
}
