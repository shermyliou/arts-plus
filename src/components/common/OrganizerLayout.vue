<script setup>
import OrganizerNavbar from './OrganizerNavbar.vue';
import FloatingNavTabs from '@/components/ui/FloatingNavTabs.vue';
</script>

<template>
  <div class="layout-container">
    <OrganizerNavbar />
    <main class="main-content">
      <RouterView class="pt72px"></RouterView>
    </main>
    <FloatingNavTabs />
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
