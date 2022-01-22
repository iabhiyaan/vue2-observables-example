<template>
  <div>
    <h1>Product 1</h1>
    <span>Price: 1200</span>
    <br />
    <!-- Using in local component -->
    <button @click="cartStore.addCart({ title: 'Prodcut 1', price: '1200' })">
      Add To Cart
    </button>
  </div>
</template>

<script>
import { cartStore } from "../composables/useCartStore";
export default {
  name: "Product",
  mounted() {
    this.cartStore = cartStore;
  },
  data() {
    return {
      cartStore: null,
    };
  },
};
</script>

<style>
</style>