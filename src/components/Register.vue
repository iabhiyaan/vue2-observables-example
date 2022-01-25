<template>
  <div>
    Register:
    <input type="text" @input="passwordValidator.checkPassword('', $event)" />
    <p>
      Password Strength:
      {{ passwordValidator.state.valid_password ? "Strong" : "Weak" }}
    </p>
    <p>
      contains eight characters:
      {{ passwordValidator.state.contains_eight_characters }}
    </p>
    <p>
      contains numbers:
      {{ passwordValidator.state.contains_number }}
    </p>
    <p>
      contains uppercase:
      {{ passwordValidator.state.contains_uppercase }}
    </p>
    <p>
      contains special character:
      {{ passwordValidator.state.contains_special_character }}
    </p>
  </div>
</template>

<script>
import usePasswordValidator from "../composables/usePasswordValidator";

export default {
  name: "Register",
  created() {
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