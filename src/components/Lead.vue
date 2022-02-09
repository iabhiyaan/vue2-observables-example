<template>
  <div>
    <pre>{{ formData }}</pre>
    <pre>{{ all }}</pre>
    <pre>{{ current }}</pre>
    <button @click="localCreateFn">Create</button>
    <button @click="useForm.resetState">Close</button>

    <form v-if="formData.formDialog" @submit.prevent="submitForm">
      <input type="text" v-model="formData.email" />
      <input type="text" v-model="formData.mobile_number" />
      <button>Submit</button>
    </form>
    <button @click="edit({ id: 1, email: 'Abhiyan' })">Edit</button>
  </div>
</template>

<script>
import useForm from "../composables/useForm";
export default {
  name: "Lead",
  created() {
    this.useForm = useForm(this.initialFormData(), {
      get: "https://api.lead",
      post: "https://api.lead/post",
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
    all() {
      return this.$store.state.lead.all;
    },
    current() {
      return this.$store.state.lead.current;
    },
  },
  methods: {
    initialFormData() {
      return {
        email: "",
        mobile_number: "",
      };
    },
    localCreateFn() {
      this.useForm.createFn();
      console.log("Custom Create Fn calls");
    },
    submitForm() {
      this.useForm.submitForm().then((res) => {
        if (!res.isUpdate) {
          return this.$store.commit("lead/SET_ALL", res.payload);
        }

        const all = [...this.all];
        const foundIndex = all && all.findIndex((d) => d.id === res.payload.id);
        if (foundIndex < 0) return;
        all.splice(foundIndex, 1, res.payload);
        this.$store.commit("lead/SET_ALL", all);
      });
    },
    edit(data) {
      this.useForm.edit(data);
      this.$store.commit("lead/SET_CURRENT", data);
    },
  },
};
</script>

<style>
</style>