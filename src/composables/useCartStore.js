import Vue from "vue";

// for global data sharing
export default Vue.observable({
  carts: [],
  addCart(data) {
    this.carts.push(data);
  }
});
