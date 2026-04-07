<script setup>
//import BootstrapChecker from './BootstrapChecker.vue'
//import SideBar from '../components/common/SideBar.vue';
//import navbar from '../components/common/navbar.vue'

import EventDetail from './EventDetail.vue';

//import HeroEventCard from '@/components/ui/HeroEventCard.vue';

</script>

<template>
  <div>
    <nav>
      <navbar/>
    </nav>
    <div class="row d-flex">
      <aside>
        <SideBar/>
      </aside>
      <main>
        <BootstrapChecker />
      </main>
      <aside></aside>
    </div>

    
    <EventDetail></EventDetail>

    <footer></footer>
  </div>
</template>

<style scoped lang="scss">
  
</style>