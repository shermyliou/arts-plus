<script setup>
import { ref } from 'vue';
import BootstrapChecker from './BootstrapChecker.vue'
import { Icon } from "@iconify/vue";
import SideBar from '../components/common/SideBar.vue';

</script>

<template>
  <div>
    <nav></nav>
    <div class="row d-flex">
      <aside>
        <SideBar/>
      </aside>
      <main>
        <BootstrapChecker />
      </main>
      <aside></aside>
    </div>
    <footer></footer>
  </div>
</template>

<style scoped lang="scss">
  
</style>