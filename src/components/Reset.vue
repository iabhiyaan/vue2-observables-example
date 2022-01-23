<template>
  <div>
    Reset:
    <button @click="counter.incrementCounter">Increase</button>
    {{ counter.state.count }}
    <br />

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

import useCounter from "../composables/useCounter";

export default {
  name: "Reset",
  created() {
    this.passwordValidator = usePasswordValidator();
    this.counter = useCounter();
  },
  data() {
    return {
      passwordValidator: null,
      counter: null,
    };
  },
};
</script>

<style>
</style>