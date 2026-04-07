<script setup>
//import BootstrapChecker from './BootstrapChecker.vue'
//import SideBar from '../components/common/SideBar.vue';
//import navbar from '../components/common/navbar.vue'

import EventDetail from './EventDetail.vue';

//import HeroEventCard from '@/components/ui/HeroEventCard.vue';
import BootstrapChecker from './BootstrapChecker.vue'
import SideBar from '../components/common/SideBar.vue';
import navbar from '../components/common/navbar.vue'
import Search from './Search.vue';

</script>

<template>
  <div>
    <div class="container">

      <div class="category-nav d-flex justify-content-between py-5">

        <div class="category-item d-flex  flex-column gap-2 align-items-center">

          <div class="icon-circle">
            <i class="bi bi-image"></i>
          </div>
          <span class="icon-label">藝文展覽</span>


        </div>
      </div>

      <div class="d-flex flex-column gap-4 py-5">
        <h2>最新消息</h2>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk o
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">Diana Campos</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk o
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">Diana Campos</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk o
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">Diana Campos</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-news" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="">
              <div class="card-body p-3">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk o
                </p>
                <div class="author d-flex align-items-center gap-2">
                  <img src="/images/event-1.jpg" alt="..." />
                  <p class="m-0">Diana Campos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column gap-4 py-5">
        <h2>近期活動</h2>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3">
              <h5 class="card-title">活動名稱</h5>
              <p class="card-text">2026.03.15—2026.03.28</p>
            </div>
          </div>

          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3">
              <h5 class="card-title">活動名稱</h5>
              <p class="card-text">2026.03.15—2026.03.28</p>
            </div>
          </div>

          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3">
              <h5 class="card-title">活動名稱</h5>
              <p class="card-text">2026.03.15—2026.03.28</p>
            </div>
          </div>

          <div class="card-events" style="width: 18rem">
            <img src="/images/event-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-3">
              <h5 class="card-title">活動名稱</h5>
              <p class="card-text">2026.03.15—2026.03.28</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <EventDetail></EventDetail>
    

    <HorizontalEventCard />
    <footer></footer>

  </div>
</template>

<style scoped lang="scss">

.icon-circle{
  width: 68px;
  height: 68px;
  border-radius: var(--border-radius-pill);
  background-color: #E4E0DDFF;

}

.author img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 99px;
}

.card-news {
  border-radius: 16px;
  overflow: hidden;
}


.card-events {
  border-radius: 16px;
  border: solid #d2d2d2;
  overflow: hidden;
}

.card-text {
  font-size: var(--h6-font-size);
  color: var(--text-default-secondary);
}

.container {
  max-width: 1320px;
}


</style>
