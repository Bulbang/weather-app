<template>
  <ChartLine
    id="chart"
    :data="{
      labels,
      datasets,
    }"
    :options="chartOptions"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useWeathersStore } from '../../../stores/weathers';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default defineComponent({
  name: 'MainPage',
  components: {
    ChartLine: Line,
  },
  setup() {
    const weathersStore = useWeathersStore();
    const labels = computed(() => weathersStore.labels);
    const datasets = computed(() => weathersStore.datasets);
    return {
      weathersStore,
      labels,
      datasets,
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
        maintainAspectRatio: false,
      },
    };
  },
});
</script>

<style scoped></style>
