<template>
  <div>
    <pre>{{ useForm }}</pre>

    <button @click="formComposable.createFn">Create</button>
    <button @click="formComposable.resetState">Close</button>

    <form v-if="useForm.formDialog" @submit.prevent="formComposable.submitForm">
      <input type="text" v-model="useForm.title" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import useForm from "../composables/useForm";
export default {
  name: "Task",
  created() {
    this.formComposable = useForm(this.initialFormData(), {
      get: "https://api.task",
      post: "https://api.task/post",
      update: "https://api.task/1",
    });
  },
  data() {
    return {
      formComposable: null,
    };
  },
  computed: {
    useForm() {
      return this.formComposable.state;
    },
  },
  methods: {
    initialFormData() {
      return {
        title: "",
      };
    },
  },
};
</script>

<style>
</style>