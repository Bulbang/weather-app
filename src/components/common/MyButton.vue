<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyButton',
});
</script>

<style scoped>
.btn {
  position: relative;
  display: flex;
  background-color: #68b0ab;
  color: #fff;
  min-height: 30px;
  border-radius: 2px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px 10px;
}
.btn:hover {
  opacity: 0.9;
}
</style>
