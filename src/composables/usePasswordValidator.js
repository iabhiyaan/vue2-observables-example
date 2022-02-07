import Vue from "vue";

export default function usePasswordValidator() {
  const state = Vue.observable({
    password_length: 1,
    contains_eight_characters: false,
    contains_number: false,
    contains_uppercase: false,
    contains_special_character: false,
    valid_password: false,
    isTyping: false
  });

  function checkPassword(_, e) {
    let newPassword = e.target.value;
    newPassword = newPassword && newPassword.trim();
    state.isTyping = true;

    const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (newPassword.length >= 8) {
      state.contains_eight_characters = true;
    } else {
      state.contains_eight_characters = false;
    }

    state.contains_number = /\d/.test(newPassword);
    state.contains_uppercase = /[A-Z]/.test(newPassword);
    state.contains_special_character = format.test(newPassword);

    if (
      state.contains_eight_characters === true &&
      state.contains_special_character === true &&
      state.contains_uppercase === true &&
      state.contains_number === true
    ) {
      state.valid_password = true;
    } else {
      state.valid_password = false;
    }
  }
  return {
    state,
    checkPassword
  };
}
