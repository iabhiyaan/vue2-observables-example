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
      update: "https://api.lead/1",
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