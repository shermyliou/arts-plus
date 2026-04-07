<script setup>
import { ref } from 'vue';
import navbar from '../components/common/navbar.vue'
//import SideBar from '@/components/common/SideBar.vue';
import HeroEventCard from '@/components/ui/HeroEventCard.vue';
import EventLayout from '@/components/common/EventLayout.vue';
import BookingCard from '@/components/ui/BookingCard.vue';
import ReviewCard from '@/components/ui/ReviewCard.vue';

// 引入活動海報圖片 
const eventPoster = '/images/event-dog.jpeg'

//評論資料
const reviews = [
  { id: 1, name: 'Diana Campos', score: 4.3, text: '' },
  { id: 2, name: '路人甲', score: 5.0, text: '如果我能解開謎團，這是不是表示，我可以完成任何計劃？我有能力達成任何理想？當世界簡化為公式，勇氣是唯一的未知數' },
  { id: 3, name: 'Lee', score: 3.5, text: '場地稍微有點小。' }
];
</script>

<template>
  <div class="event-detail-page">
    <navbar/>
    <EventLayout>
      <template #aside-left>
        <div class="aside-left"></div>
      </template>

      <template #default>
        <div class="event-detail-content">
          <!-- <HeroEventCard /> -->
          <HeroEventCard 
            :image="eventPoster" 
            title="果陀劇場《深夜小狗神秘習題》"
            :score="4.3"
            :reviewCount="16"
          />
          
          <div class="nav-wrapper">
            <p class="item-desc"></p>
            <ul class="nav nav-pills">
              <li class="nav-item"><a class="nav-link active" href="#booking">購票資訊</a></li>
              <li class="nav-item"><a class="nav-link" href="#info">活動資訊</a></li>
              <li class="nav-item"><a class="nav-link" href="#map">藝文地圖</a></li>
              <li class="nav-item"><a class="nav-link" href="#notice">重要須知</a></li>
              <li class="nav-item"><a class="nav-link" href="#reviews">心得評論</a></li>
            </ul>
          </div>

          <section id="booking" class="mt-4">
            <!-- <BookingCard /> -->
            <BookingCard 
              date="2026/3/28 (六) 10:00"
              location="衛武營國家藝術文化中心"
              stock="253"
              price="750 、 1,000"
            />

            <BookingCard 
              date="2026/3/29 (日) 14:30"
              location="衛武營國家藝術文化中心"
              stock="12"
              price="750 、 1,000"
              class="mt-3" 
            />
          </section>

          <section id="review" class="mt-4">
            <!-- <ReviewCard/> -->
            <ReviewCard 
              v-for="item in reviews" 
              :key="item.id"
              :userName="item.name"
              :score="item.score"
              :comment="item.text"
              class="mb-3"
            />
          </section>
        </div>
      </template>

      <template #aside-right>
        <div class="aside-right"></div>
      </template>
    </EventLayout>
  </div>
</template>

<style lang="scss" scoped>
.event-detail-content {
  width: 100%;
  padding: 24px 16px;
  
  .nav-wrapper {
    margin: 20px 0;
  }
}
</style>