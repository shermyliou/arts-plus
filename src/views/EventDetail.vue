<script setup>
import { ref } from 'vue';
import navbar from '../components/common/navbar.vue'
//import SideBar from '@/components/common/SideBar.vue';
import HeroEventCard from '@/components/ui/HeroEventCard.vue';
import EventLayout from '@/components/common/EventLayout.vue';

</script>

<template>
  <div class="event-detail-page">
    <navbar/>
    <EventLayout>
      <div class="aside-left">
        <!-- <SideBar /> -->
      </div>

      <div class="event-detail-content">
        <HeroEventCard />
        <div>
            <p class="item-desc"></p>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#">購票資訊</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">活動資訊</a></li>
              <li class="nav-item"><a class="nav-link" href="#">藝文地圖</a></li>
              <li class="nav-item"><a class="nav-link" href="#">重要須知</a></li>
              <li class="nav-item"><a class="nav-link" href="#">心得評論</a></li>
            </ul>
          </div>
      </div>

      <div class="aside-right">
        <!-- <div class="right-placeholder"></div> -->
      </div>
    </EventLayout>
  </div>
</template>

<style lang="scss" scoped>
// @import "@/assets/styles/tokens/_primitive.scss";
// @import "@/assets/styles/tokens/_semantic.scss";
// @import "@/assets/styles/overrides/_navtabs.scss";

.event-detail-content {
  width: 100%;
  padding: 24px 16px;
}

.right-placeholder {
  height: 100%;
}
</style>