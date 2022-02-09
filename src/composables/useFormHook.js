import { reactive } from "@vue/composition-api";

export default function useFormHook(formData) {
  const state = reactive({
    formData: { ...formData }
  });

  function reset() {
    state.formData = { ...formData };
  }

  function edit(detail) {
    state.formData = { ...state.formData, ...detail };
  }

  return {
    state,
    reset,
    edit
  };
}
