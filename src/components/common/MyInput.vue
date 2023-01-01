<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyInput',
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
  methods: {
    updateInput(event: any) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
});
</script>

<style scoped>
.input {
  padding: 10px;
  border-radius: 2px;
  border: 0;
  background-color: #eeeeee;
  height: 40px;
  font-size: 15px;
  color: #554d56;
  caret-color: #68b0ab;
  outline-color: #68b0ab;
}
</style>
