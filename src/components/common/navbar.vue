<script setup>
import { ref } from "vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg custom-navbar brand-50">
    <div class="container-fluid p-0">
      <a class="navbar-brand me-0" href="#">
        <img src="/images/ArtPlusLogo.png" alt="ArtPlus" width="128" />
      </a>

      <div class="d-flex ms-auto gap-5">
        <div class="search-wrapper">
          <div class="search-bar-placeholder gap-2">
            <span class="bitcoin-icons--search-outline"></span>
            <span>搜尋</span>
          </div>
        </div>

        <div class="navbar-actions">
          <div class="nav-item">
            <span class="ion--cart-outline"></span>
          </div>
          <div class="nav-item">
            <span class="ph--ticket"></span>
          </div>
          <div class="nav-item">
            <span class="ph--bell-light"></span>
          </div>
          <div class="nav-item">
            <span class="ph--user"></span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.custom-navbar {
  background-color: var(--background-brand-secondary);
  height: 72px;
  border-bottom: 1px solid #eeeeee;

  padding: 0 60px !important;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px !important; // 手機版縮小間距
  }
}

.search-wrapper {
  flex: 1; // 佔滿剩餘空間
  display: flex;
}

.search-bar-placeholder {
  background-color: #eeeeee;
  border-radius: 50px;
  border: #000000 1px solid;
  padding: 8px 24px;
  width: 300px;
  color: #888888;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

// 右側圖示容器
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-item {
  display: flex;
  align-items: center;
}

/* Icon 顯示邏輯 */
[class^="ion--"],
[class*=" ion--"],
[class^="ph--"],
[class*=" ph--"],
[class^="bitcoin-icons--"],
[class*=" bitcoin-icons--"] {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: #333333;
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  vertical-align: middle;
}

.ion--cart-outline {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2.25 2.25h1.35c.63 0 1.15.51 1.15 1.15l1.05 10.5c.08.82.77 1.45 1.6 1.45h10.6c.83 0 1.52-.63 1.6-1.45l1.05-7.35a1.15 1.15 0 0 0-1.15-1.35H5.85m0 0L5.4 3.6m2.1 14.4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m12.6 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0'/%3E%3C/svg%3E");
}
.ph--ticket {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Cpath fill='%23000' d='M232 104a8 8 0 0 0 8-8V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a8 8 0 0 0 8 8a24 24 0 0 1 0 48a8 8 0 0 0-8 8v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-8-8a24 24 0 0 1 0-48M32 167.2a40 40 0 0 0 0-78.4V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.4'/%3E%3C/svg%3E");
}

.ph--bell-light {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Cpath fill='%23000' d='M220.07 176.94C214.41 167.2 206 139.73 206 104a78 78 0 1 0-156 0c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h42.48a38 38 0 0 0 75 0H208a14 14 0 0 0 12.06-21.06ZM128 218a26 26 0 0 1-25.29-20h50.58A26 26 0 0 1 128 218m81.71-33a1.9 1.9 0 0 1-1.7 1H48a1.9 1.9 0 0 1-1.7-1a2 2 0 0 1 0-2c7.57-13 15.7-43.31 15.7-79a66 66 0 1 1 132 0c0 35.68 8.14 65.95 15.71 79a2 2 0 0 1 0 2'/%3E%3C/svg%3E");
}

.ph--user {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Cpath fill='%23000' d='M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56'/%3E%3C/svg%3E");
}

.bitcoin-icons--search-outline {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1'%3E%3Ccircle cx='11' cy='11' r='5.5'/%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m15 15l4 4'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
