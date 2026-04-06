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
 * 包含左側側邊欄 (250px)、中間主內容 (1fr) 以及右側側邊欄 (250px)。
 */
</script>

<style lang="scss" scoped>
.event-layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: var(--main-gap-x-large, 1.5rem);
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ;
  width: 100%;
  min-height: 100vh;

  &__aside-left,
  &__aside-right {
    width: 250px;
    background-color: var(--background-default-secondary);
  }

  &__main {
    min-width: 0; // 防止內容溢出導致 Grid 變形
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  // 響應式處理：當螢幕寬度不足以容納三欄時
  @media (max-width: 1200px) {
    grid-template-columns: 250px 1fr;
    
    &__aside-right {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    &__aside-left {
      display: none;
    }
  }
}
</style>
