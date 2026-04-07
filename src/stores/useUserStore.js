import { defineStore } from 'pinia'

export const useNoteStore = defineStore('event', {
  state: () => ({ events: [
    {
    },
  ], 
  idCount: 12,
  keyword: "",
 }),
  getters: {
  },
  actions: {
  },
})