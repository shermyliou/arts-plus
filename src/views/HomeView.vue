<script setup>
import BootstrapChecker from './BootstrapChecker.vue'
import SideBar from '../components/common/SideBar.vue';
import navbar from '../components/common/navbar.vue'

</script>

<template>
  <div>
    <nav>
      <div class="box1">789</div>
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
    <footer></footer>
  </div>
</template>

<style scoped lang="scss">
  
</style>