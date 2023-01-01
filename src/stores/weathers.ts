import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

interface State {
  weathers: {
    date: string;
    avg_temp_celsium: number;
    maxwind_kph: number;
    avg_humidity: number;
    avg_visibility_km: number;
  }[];
}

export const useWeathersStore = defineStore('weathers', {
  state: (): State => ({
    weathers: [],
  }),
  actions: {
    async getWeathers(daysCount?: number, city?: string) {
      try {
        const response = await axios.get('');
        this.weathers = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
