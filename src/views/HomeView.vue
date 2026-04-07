<script setup>
//import BootstrapChecker from './BootstrapChecker.vue'
//import SideBar from '../components/common/SideBar.vue';
//import navbar from '../components/common/navbar.vue'

import EventDetail from './EventDetail.vue';

//import HeroEventCard from '@/components/ui/HeroEventCard.vue';
import BootstrapChecker from './BootstrapChecker.vue'
import SideBar from '../components/common/SideBar.vue';
import navbar from '../components/common/navbar.vue'
import Search from './Search.vue';

</script>

<template>
  <div>
    
    <div class="d-flex col-12">
      <aside>
        <SideBar/>
      </aside>
      <main>
        <Search/>
        <BootstrapChecker />
      </main>
      <aside></aside>
    </div>
    <footer></footer>
  </div>
  <EventDetail></EventDetail>
</template>

<style scoped lang="scss">
  
</style>