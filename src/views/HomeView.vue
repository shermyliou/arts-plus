<script setup>
import { ref } from 'vue';
import BootstrapChecker from './BootstrapChecker.vue'
import EventCard from '../components/ui/EventCard.vue';
import { Icon } from "@iconify/vue";
import HorizoltalEventCard from '../components/ui/HorizontalEventCard.vue'

const events = [
  {
    id: 1,
    title: '春季音樂節',
    time: '2025/04/01 14:00',
    location: '台北市中山區',
    price: 800,
    tag: '音樂',
    image: ' /images/event-1.jpg',
  },
  {
    id: 2,
    title: '當代藝術展',
    time: '2025/04/05 10:00',
    location: '台北市信義區',
    price: 350,
    tag: '展覽',
    image: '/images/event-2.jpg',
  },
]
</script>

<template>
  <div>
    <Icon icon="ph:finn-the-human"  width="$icon-size-large" height="80px" />
    <HorizoltalEventCard/>
  <EventCard v-for="event in events" v-bind="event" />
  <div class="nav nav-pills">
    <div class="nav-item">
      <div class="nav-link active">123</div>
    </div>
    <div class="nav-item">
      <div class="nav-link">123</div>
    </div>
  </div>
  <BootstrapChecker />
  </div>
</template>

<style scoped lang="scss">
  
</style>