import Vue from "vue";

export default function useForm(formData, route) {
  const initialState = { ...formData, formDialog: false };
  function setInitialFormData() {
    return Vue.observable({
      ...initialState
    });
  }

  let state = setInitialFormData();

  function createFn() {
    state.formDialog = true;
  }

  function resetState() {
    Object.keys(initialState).forEach((key) => {
      state[key] = initialState[key];
    });
  }

  function submitForm() {
    if (!state.id) {
      alert(route.post);
      resetState();
    } else {
      alert(route.update);
      resetState();
    }
  }

  return {
    state,
    setInitialFormData,
    createFn,
    submitForm,
    resetState
  };
}
