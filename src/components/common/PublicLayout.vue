<script setup>
import PublicNavbar from './PublicNavbar.vue';
import FloatingNavTabs from '@/components/ui/FloatingNavTabs.vue';
</script>

<template>
  <div>
    <PublicNavbar />
    <main>
      <RouterView class="pt72px"/>
    </main>
    <FloatingNavTabs />
  </div>
</template>

<style scoped lang="scss">
</style>
