import Vue from "vue";

export default function useForm(formData, route) {
  const initialState = { ...formData, formDialog: false };

  // tracking state
  const state = Vue.observable({
    formData: { ...initialState }
  });

  function createFn() {
    state.formData.formDialog = true;
  }

  function resetState() {
    state.formData = { ...initialState };
  }

  function submitForm() {
    if (!state.formData.id) {
      console.log(route.post);
      return new Promise((res, rej) => {
        return setTimeout(() => {
          res({ payload: [{ id: 1, email: "iabhiyaan" }] });
          resetState();
        }, 2000);
      });
    } else {
      console.log(`${route.post}/${state.formData.id}`);
      return new Promise((res, rej) => {
        return setTimeout(() => {
          res({ isUpdate: true, payload: { id: 1, email: "updated emal" } });
          resetState();
        }, 2000);
      });
    }
  }

  function edit(data) {
    state.formData = { ...state.formData, ...data };
  }

  // function copyState(states) {
  //   Object.keys(states).forEach((key) => {
  //     state[key] = states[key];
  //   });
  // }

  // function setInitialFormData() {
  //   return Vue.observable({
  //     ...initialState
  //   });
  // }

  return {
    state,
    // setInitialFormData,
    createFn,
    submitForm,
    resetState,
    edit
  };
}
