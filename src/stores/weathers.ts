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
          {
            label: 'Average temp',
            backgroundColor: '#44AF69',
            borderColor: 'rgba(68,175,105,0.5)',
            fill: false,
            data: [],
          },
          {
            label: 'Wind speed',
            backgroundColor: '#F8333C',
            borderColor: 'rgba(248,51,60,0.5)',
            data: [],
          },
          {
            label: 'Average humidity',
            backgroundColor: '#FCAB10',
            borderColor: 'rgba(252,171,16,0.5)',
            data: [],
          },
          {
            label: 'Average visibility',
            backgroundColor: '#2B9EB3',
            borderColor: 'rgba(43,158,179,0.5)',
            data: [],
          },
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
