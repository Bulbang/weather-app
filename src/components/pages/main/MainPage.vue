<template>
  <div class="wrapper">
    <div class="panel">
      <MyInput class="input" type="number" min="1" v-model="daysCount" />
      <MyInput class="input" type="text" v-model="city" />
      <MyButton @click="show">Show</MyButton>
    </div>
    <ChartLine
      class="chart"
      id="chart"
      :data="{
        labels,
        datasets,
      }"
      :options="chartOptions"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Line } from 'vue-chartjs';
import MyInput from '@/components/common/MyInput.vue';
import MyButton from '@/components/common/MyButton.vue';
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
    MyInput,
    MyButton,
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
      daysCount: 5,
      city: 'rivne',
      chartOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    show() {
      this.weathersStore.getWeathers(this.daysCount, this.city);
    },
  },
});
</script>

<style scoped>
.panel {
  display: flex;
  padding: 10px;
}
.input:first-of-type {
  width: 100px;
}
.input {
  margin: 0 10px 0 0;
}
.chart {
  padding: 10px;
}
</style>
