<script setup>
import HomeView from './views/HomeView.vue';
import EventEdit from './views/EventEdit.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav>
        <navbar/>
    </nav>
    <RouterView></RouterView>
  </div>
  <!-- <HomeView/> -->
  <EventEdit/>
</template>
