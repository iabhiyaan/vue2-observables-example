<template>
  <div>
    Register:
    <input type="text" @input="passwordValidator.checkPassword('', $event)" />
    <pre>
      {{ passwordValidator && passwordValidator.state }}
    </pre>
    <p>
      Password Strength:
      {{ passwordValidator.state.valid_password ? "Strong" : "Weak" }}
    </p>
  </div>
</template>

<script>
import usePasswordValidator from "../composables/usePasswordValidator";

export default {
  name: "Register",
  mounted() {
    this.passwordValidator = usePasswordValidator();
  },
  data() {
    return {
      passwordValidator: null,
    };
  },
};
</script>

<style>
</style>