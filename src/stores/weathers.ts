import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

interface Weather {
  date: string;
  avg_temp_celsium: number;
  maxwind_kph: number;
  avg_humidity: number;
  avg_visibility_km: number;
}

interface State {
  labels: string[];
  datasets: any[];
}

export const useWeathersStore = defineStore('weathers', {
  state: (): State => ({
    labels: [],
    datasets: [],
  }),
  actions: {
    async getWeathers(daysCount?: number, city?: string) {
      try {
        const response = await axios.get('', {
          params: {
            daysCount,
            city,
          },
        });
        const weathers = response.data as Weather[];
        this.labels = weathers.map((weather) => weather.date);
        this.datasets = [
          { label: 'Average temp', backgroundColor: '#44AF69' },
          { label: 'Wind speed', backgroundColor: '#F8333C' },
          { label: 'Average humidity', backgroundColor: '#FCAB10' },
          { label: 'Average visibility', backgroundColor: '#2B9EB3' },
        ];
        weathers.map((weather) => {
          this.datasets[0].data?.push(weather.avg_temp_celsium);
          this.datasets[1].data?.push(weather.maxwind_kph);
          this.datasets[2].data?.push(weather.avg_humidity);
          this.datasets[3].data?.push(weather.avg_visibility_km);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
