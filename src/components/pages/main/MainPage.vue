<template>
  <div>
    <ChartLine
      id="chart"
      :data="{
        labels: dates,
        datasets: [{ data: [40, 20, 12] }],
      }"
      :options="chartOptions"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { useWeathersStore } from '../../../stores/weathers';
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  name: 'MainPage',
  components: {
    ChartLine: Line,
  },
  setup() {
    const weathersStore = useWeathersStore();
    const dates = computed(() => weathersStore.dates);
    return {
      weathersStore,
      dates,
    };
  },
  mounted() {
    this.weathersStore.getWeathers();
  },
  data() {
    return {
      selected: null,
      chartOptions: {
        responsive: true,
      },
    };
  },
});
</script>

<style scoped></style>
