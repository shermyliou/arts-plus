<script setup>
import BootstrapChecker from './BootstrapChecker.vue'
import SideBar from '../components/common/SideBar.vue';
import navbar from '../components/common/navbar.vue'
import Search from './Search.vue';

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
    <footer></footer>
  </div>
</template>

<style scoped lang="scss">
  
</style>