<script setup>
import BookingCard from '@/components/ui/BookingCard.vue'
import ReviewCard from '@/components/ui/ReviewCard.vue'
</script>

<template>
  <div class="p-5">
    <div class="container">
      <h1 class="mb-4">Component Showcase</h1>
      
      <div class="row mb-5">
        <div class="col-md-6">
          <h2 class="h4 mb-3">BookingCard</h2>
          <BookingCard 
            date="2026/3/28 (六) 10:00"
            location="衛武營國家藝術文化中心"
            stock="253"
            price="750 、 1,000"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <h2 class="h4 mb-3">ReviewCard</h2>
          <ReviewCard 
            userName="Diana Campos"
            date="2026/5/29"
            :score="4.3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
}
</style>