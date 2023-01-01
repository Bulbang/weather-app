<template>
  <ChartLine
    id="chart"
    :data="{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40],
        },
      ],
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
        maintainAspectRatio: false,
      },
    };
  },
});
</script>

<style scoped></style>
