import Vue from "vue";

export default function useForm(formData, route) {
  const initialState = { ...formData, formDialog: false };
  function setInitialFormData() {
    return Vue.observable({
      ...initialState
    });
  }

  // tracking state
  let state = setInitialFormData();

  function createFn() {
    state.formDialog = true;
  }

  function resetState() {
    copyState(initialState);
  }

  function submitForm() {
    if (!state.id) {
      alert(route.post);
      resetState();
    } else {
      alert(`${route.post}/${state.id}`);
      resetState();
    }
  }

  function edit(data) {
    copyState(data);
  }

  function copyState(states) {
    Object.keys(states).forEach((key) => {
      state[key] = states[key];
    });
  }

  return {
    state,
    setInitialFormData,
    createFn,
    submitForm,
    resetState,
    edit
  };
}
