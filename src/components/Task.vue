<template>
  <div>
    <pre>{{ formData }}</pre>

    <button @click="useForm.createFn">Create</button>
    <button @click="useForm.resetState">Close</button>

    <form v-if="formData.formDialog" @submit.prevent="useForm.submitForm">
      <input type="text" v-model="formData.title" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import useForm from "../composables/useForm";
export default {
  name: "Task",
  created() {
    this.useForm = useForm(this.initialFormData(), {
      get: "https://api.task",
      post: "https://api.task/post",
      update: "https://api.task/1",
    });
  },
  data() {
    return {
      useForm: null,
    };
  },
  computed: {
    formData() {
      return this.useForm.state.formData;
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