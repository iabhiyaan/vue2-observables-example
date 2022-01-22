import Vue from "vue";

export default Vue.observable({
  carts: [],
  addCart(data) {
    this.carts.push(data);
  }
});
