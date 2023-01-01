<template>
  <div>{{ weathers }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useWeathersStore } from '../../../stores/weathers';

export default defineComponent({
  name: 'MainPage',
  setup() {
    const weathersStore = useWeathersStore();
    const weathers = computed(() => weathersStore.weathers);
    return {
      weathersStore,
      weathers,
    };
  },
  mounted() {
    this.weathersStore.getWeathers();
  },
});
</script>

<style scoped></style>
