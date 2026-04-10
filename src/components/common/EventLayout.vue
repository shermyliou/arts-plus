<template>
  <div class="event-layout">
    <aside class="event-layout__aside-left">
      <slot name="aside-left"></slot>
    </aside>
    
    <main class="event-layout__main">
      <slot></slot>
    </main>

    <aside class="event-layout__aside-right">
      <slot name="aside-right"></slot>
    </aside>
  </div>
</template>

<script setup>
/**
 * EventLayout 組件提供了一個三欄式的佈局結構。
 * 包含左側側邊欄 (200px)、中間主內容 (1fr) 以及右側側邊欄 (200px)。
 */
</script>

<style lang="scss" scoped>
@use "@/assets/styles/tokens/_primitive.scss" as *;

.event-layout {
  display: grid;
  // 使用 1fr auto 1fr：左右自動填滿剩餘空間，中間由內容(main)決定寬度
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  width: 100%;
  min-height: 100vh;
  background-color: $brand-50; // 確保側邊欄底色延伸

  &__aside-left,
  &__aside-right {
    background-color: $brand-50;
    width: 100%;
    
  }

  &__main {
    min-width: 0; // 防止內容溢出導致 Grid 變形
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    // 關鍵：限制主內容最大寬度，並在大空間中置中
    max-width: 910px;
    margin: 0 auto;
    background-color:  var(--background-default-default);
    padding: 0 24px;
  }

  // 響應式處理：1200px 以下隱藏右側
  @media (max-width: 1200px) {
    grid-template-columns: auto 1fr;
    
    &__aside-right {
      display: none;
    }

    &__main {
      max-width: 100%; // 恢復為填滿剩餘空間
      margin: 0;
    }
  }

  // 響應式處理：768px 以下僅保留主內容
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    &__aside-left {
      display: none;
    }
    
    &__main {
      padding: 16px;
      max-width: 100%;
    }
  }
}
</style>
