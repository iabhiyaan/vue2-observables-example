<template>
  <div>
    <div>{{ formData }}</div>
    <input type="text" v-model="formData.title" />
    <div>
      <button @click="useFormHook.reset">Clear</button>
      <button @click="formData.formDialog = true">Open</button>
    </div>
    <div>
      <button @click="useFormHook.edit({ id: 1, title: 'Hello World' })">
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import useFormHook from "../composables/useFormHook";
export default {
  name: "Form",
  data() {
    return {
      useFormHook: useFormHook(this.initialFormData()),
    };
  },
  computed: {
    formData() {
      return this.useFormHook.state.formData;
    },
  },
  methods: {
    initialFormData() {
      return {
        title: "",
        formDialog: false,
      };
    },
  },
};
</script>

<style>
</style>