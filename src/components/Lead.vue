<template>
  <div>
    <pre>{{ useForm }}</pre>
    <button @click="formComposable.createFn">Create</button>
    <button @click="formComposable.resetState">Close</button>

    <form v-if="useForm.formDialog" @submit.prevent="formComposable.submitForm">
      <input type="text" v-model="useForm.email" />
      <input type="text" v-model="useForm.mobile_number" />
      <button>Submit</button>
    </form>
    <button @click="formComposable.edit({ id: 1, email: 'Abhiyan' })">
      Edit
    </button>
  </div>
</template>

<script>
import useForm from "../composables/useForm";
export default {
  name: "Lead",
  created() {
    this.formComposable = useForm(this.initialFormData(), {
      get: "https://api.lead",
      post: "https://api.lead/post",
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
        email: "",
        mobile_number: "",
      };
    },
  },
};
</script>

<style>
</style>