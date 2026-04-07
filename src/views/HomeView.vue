<script setup>
import EventDetail from './EventDetail.vue';
import SideBar from '../components/common/SideBar.vue';
import navbar from '../components/common/navbar.vue'
import Search from './Search.vue';
import Map from './Map.vue'

import BootstrapChecker from './BootstrapChecker.vue'

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
        <Map></Map>
        <Search/>
        <BootstrapChecker />
        <EventDetail></EventDetail>
      </main>
      <aside></aside>
    </div>

    

    <footer></footer>
  </div>
</template>

<style scoped lang="scss">
  
</style>