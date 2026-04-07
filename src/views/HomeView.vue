<script setup>
//import BootstrapChecker from './BootstrapChecker.vue'
//import SideBar from '../components/common/SideBar.vue';
//import navbar from '../components/common/navbar.vue'

import EventDetail from './EventDetail.vue';

//import HorizontalEventCard from '@/components/ui/HorizontalEventCard.vue';

//import BootstrapChecker from './BootstrapChecker.vue'
// import SideBar from '../components/common/SideBar.vue';
// import navbar from '../components/common/navbar.vue'
//import Search from './Search.vue';

</script>

<template>
  <div>
    <nav>
      <navbar/>
    </nav>
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

    <EventDetail></EventDetail>
    

    <HorizontalEventCard />
    <footer></footer>

  </div>
</template>

<style scoped lang="scss">
  
</style>