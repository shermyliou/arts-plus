<script setup>
import SideBar from "../components/common/SideBar.vue";
import navbar from "../components/common/navbar.vue";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const eventDescription = ref(
  '<p style="text-align: center;">改編自東野圭吾最感動人心的作品</p><p style="text-align: center;">在內心有破洞的時候，我收到了穿越時空的來信</p><p style="text-align: center;">即使想決定目的地，也不知道路在哪裡</p><p style="text-align: center;">即使擁有選擇，卻無法做出決定</p><p style="text-align: center;">如果有個地方，能指引迷途的我們</p><p style="text-align: center;">如果有個地方，可以聆聽我們的煩惱…</p><p><br></p><p style="text-align: center;"><strong style="color: rgb(82, 37, 4); font-size: 20px;">日本正式授權改編 東野圭吾暖心經典</strong></p><p style="text-align: center;"><strong style="color: rgb(82, 37, 4); font-size: 20px;">《解憂雜貨店》歡迎再次來信！</strong></p><p><br></p><p style="text-align: center;"><img src="https://www.figma.com/api/mcp/asset/4e36bf74-b9ec-45c9-874e-1156fe5dd3e7" width="380"></p><p><br></p><p><strong>｜劇情簡介｜</strong></p><p>三個闖空門的少年意外躲進了一間歇業多年、相傳能消煩解憂的雜貨店，過去只要在晚上將寫了煩惱的信丟進雜貨店鐵捲門的投遞口，隔天就可以在店後方的牛奶箱拿到回信解答！在看似廢棄的店裡，他們發現店內的時間似乎與外界不同，彷彿從未經歷時光流逝？此時，一封來自過去的信突然出現，他們發現自己和他人的命運似乎被一條無形的線連結了起來？</p><p>在愛情與夢想之間痛苦不已的月亮兔；搖擺於理想和繼承家業的魚店音樂人； 在道德與至親家人間難以抉擇的保羅藍儂；徘迴於報恩與生計，迷惘的汪汪該如何改變自己的人生？當自認毫無用處的少年開始擔任助人的角色，意外收到困惑之人的來信，因緣際會持筆寫下屬於他們純粹的回覆，然而在回信的同時，竟奇妙的改變了他們的人生？</p>',
);

const bannerImageInput = ref(null);
const bannerImageUrl = ref(
  "https://www.figma.com/api/mcp/asset/0ef683b9-9339-46b5-9f45-f2a3edf64f24",
);

const posterImageInput = ref(null);
const posterImageUrl = ref(
  "https://www.figma.com/api/mcp/asset/79fd4932-f349-43db-8d6a-d3e202e49e11",
);

const triggerFileInput = () => {
  bannerImageInput.value.click();
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      bannerImageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const triggerPosterFileInput = () => {
  posterImageInput.value.click();
};

const handlePosterImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      posterImageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div
    class="bg-body d-flex flex-column"
    style="height: 100vh; overflow: hidden"
  >
    <nav class="flex-shrink-0">
      <navbar />
    </nav>
    <div class="d-flex flex-grow-1" style="min-height: 0">
      <aside class="flex-shrink-0">
        <SideBar />
      </aside>
      <main
        class="flex-grow-1 p-5 d-flex flex-column gap-1 overflow-y-auto"
        style="scroll-behavior: smooth"
      >
        <!-- Event Header Banner -->
        <div
          class="position-relative rounded-4 overflow-hidden mb-4 shadow-lg event-header-banner flex-shrink-0"
          style="height: 480px"
          id="image"
        >
          <!-- Background Banner (16:9) -->
          <div class="position-absolute top-0 start-0 w-100 h-100">
            <img
              :src="bannerImageUrl"
              class="w-100 h-100 object-fit-cover"
              alt="Event Banner"
            />
            <div
              class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"
            ></div>
            <!-- Hidden file input for banner image -->
            <input
              type="file"
              ref="bannerImageInput"
              @change="handleImageUpload"
              accept="image/*"
              class="d-none"
            />
          </div>

          <!-- Header Content -->
          <div
            class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-5 text-white"
          >
            <div class="container-fluid p-0">
              <div class="row align-items-end">
                <div class="col-lg-8">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <span
                      class="badge bg-yellow-400 text-dark rounded-pill px-3 py-1 fw-normal"
                      >草稿</span
                    >
                    <span
                      class="badge bg-white bg-opacity-10 border border-white border-opacity-25 rounded-pill px-3 py-1 fw-normal"
                      >演出</span
                    >
                  </div>
                  <h1 class="fw-bold mb-3">
                    果陀劇場《解憂雜貨店》2026歡迎再次來信
                  </h1>
                  <p
                    class="fs-5 opacity-75 mb-4 d-flex align-items-center gap-2 flex-wrap"
                  >
                    <Icon icon="ph:calendar-blank" />
                    <span>2026/4/24 - 6/21</span>
                    <span class="mx-1">·</span>
                    <Icon icon="ph:map-pin" />
                    <span>新北市藝文中心演藝廳</span>
                  </p>
                  <button
                    class="btn btn-outline-light btn-rect btn-sm d-inline-flex align-items-center justify-content-center gap-2 rounded-3 px-3 py-2"
                    style="width: 156px"
                    @click="triggerFileInput"
                  >
                    <Icon icon="ph:pencil-simple" />
                    <span>變更圖片</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Portrait Poster (3:4) -->
          <div
            class="position-absolute"
            style="
              right: 48px;
              top: 50%;
              transform: translateY(-50%);
              z-index: 5;
            "
          >
            <div class="position-relative">
              <div
                class="badge bg-white text-dark position-absolute start-50 rounded-pill px-3 shadow-sm z-1"
                style="
                  font-size: 10px;
                  top: -12px;
                  transform: translate(-50%, -100%);
                "
              >
                3:4 Banner
              </div>
              <div
                class="card border-8 border-white rounded-4 overflow-hidden shadow-lg m-0"
                style="width: 280px; height: 373px"
              >
                <img
                  :src="posterImageUrl"
                  class="w-100 h-100 object-fit-cover"
                  alt="Event Poster"
                />
                <input
                  type="file"
                  ref="posterImageInput"
                  @change="handlePosterImageUpload"
                  accept="image/*"
                  class="d-none"
                />
                <div
                  class="position-absolute bottom-0 start-50 translate-middle-x mb-3"
                >
                  <button
                    class="btn btn-outline-light btn-rect btn-sm d-inline-flex align-items-center justify-content-center gap-2 rounded-3 px-3 py-2 text-white shadow-sm"
                    style="width: 156px"
                    @click="triggerPosterFileInput"
                  >
                    <Icon icon="ph:pencil-simple" />
                    <span>變更圖片</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Label -->
          <div class="position-absolute top-0 start-0 m-3">
            <span
              class="badge bg-dark rounded-1 px-2 py-1 opacity-75"
              style="font-size: 10px"
              >16:9 Banner</span
            >
          </div>
        </div>

        <!-- 下方兩欄內容 -->
        <div class="row g-4 m-0">
          <!-- 左側：活動內容編輯 -->
          <div class="col-lg-8 p-0 pe-lg-3 d-flex flex-column gap-4">
            <!-- 基本資訊 -->
            <section
              id="basic"
              class="card border-0 rounded-4 bg-white p-4 shadow-sm"
            >
              <div class="d-flex align-items-center gap-1 mb-3">
                <h3 class="fs-5 fw-normal mb-0">基本資訊</h3>
                <span class="text-danger">*</span>
              </div>
              <div class="mb-3">
                <label class="form-label text-secondary small">活動名稱</label>
                <input
                  type="text"
                  class="form-control bg-light-subtle border-light-subtle"
                  value="果陀劇場《解憂雜貨店》2026歡迎再次來信"
                />
              </div>
              <div class="mb-0">
                <label class="form-label text-secondary small">活動種類</label>
                <select class="form-select bg-light-subtle border-light-subtle">
                  <option selected>戲劇 > 舞台劇</option>
                  <option>戲劇 > 音樂劇</option>
                  <option>戲劇 > 布袋戲</option>
                  <option>戲劇 > 歌仔戲</option>
                  <option>戲劇 > 偶戲</option>
                  <option>戲劇 > 曲藝/相聲</option>
                  <option>戲劇 > 漫才/脫口秀</option>
                  <option>戲劇 > 傳統戲曲</option>
                  <option>戲劇 > 其他戲劇</option>
                </select>
              </div>
            </section>

            <!-- 時間地點 -->
            <section
              id="time"
              class="card border-0 rounded-4 bg-white p-4 shadow-sm"
            >
              <div class="d-flex align-items-center gap-1 mb-3">
                <h3 class="fs-5 fw-normal mb-0">時間地點</h3>
                <span class="text-danger">*</span>
              </div>
              <div class="row g-3 mb-3">
                <!-- 開始日期 -->
                <div class="col-md-6">
                  <label class="form-label text-secondary small"
                    >開始日期</label
                  >
                  <input
                    type="date"
                    class="form-control bg-light-subtle border-light-subtle"
                    value="2026-04-24"
                  />
                </div>

                <!-- 開始時間 -->
                <div class="col-md-6">
                  <label class="form-label text-secondary small"
                    >開始時間</label
                  >
                  <input
                    type="time"
                    class="form-control bg-light-subtle border-light-subtle"
                    value="19:30"
                  />
                </div>

                <!-- 結束日期 -->
                <div class="col-md-6">
                  <label class="form-label text-secondary small"
                    >結束日期</label
                  >
                  <input
                    type="date"
                    class="form-control bg-light-subtle border-light-subtle"
                    value="2026-04-24"
                  />
                </div>

                <!-- 結束時間 -->
                <div class="col-md-6">
                  <label class="form-label text-secondary small"
                    >結束時間</label
                  >
                  <input
                    type="time"
                    class="form-control bg-light-subtle border-light-subtle"
                    value="19:30"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label text-secondary small"
                  >活動地點 (完整地址)</label
                >
                <input
                  type="text"
                  class="form-control bg-light-subtle border-light-subtle"
                  value="新北市板橋區莊敬路62號"
                />
              </div>
              <div class="mb-3">
                <label class="form-label text-secondary small"
                  >活動地點 (補充說明)</label
                >
                <input
                  type="text"
                  class="form-control bg-light-subtle border-light-subtle"
                  value="新北市藝文中心演藝廳"
                />
              </div>
              <div class="rounded-3 overflow-hidden" style="height: 340px">
                <img
                  src="https://www.figma.com/api/mcp/asset/02710d9c-c8da-4727-ba72-f825495a9047"
                  class="w-100 h-100 object-fit-cover"
                  alt="Map"
                />
              </div>
            </section>

            <!-- 活動介紹 -->
            <section
              id="description"
              class="card border-0 rounded-4 bg-white p-4 shadow-sm"
            >
              <div class="d-flex align-items-center gap-1 mb-3">
                <h3 class="fs-5 fw-normal mb-0">活動介紹</h3>
                <span class="text-danger">*</span>
              </div>
              <div
                class="quill-editor-wrapper border rounded-3 overflow-hidden"
              >
                <QuillEditor
                  v-model:content="eventDescription"
                  contentType="html"
                  theme="snow"
                  toolbar="full"
                  style="min-height: 400px; border: none"
                />
              </div>
            </section>
          </div>

          <!-- 右側：發佈設定與快速選單 -->
          <div class="col-lg-4 p-0 ps-lg-3">
            <div class="sticky-top" style="top: 24px">
              <!-- 發佈設定 -->
              <div class="card border-0 rounded-4 bg-white p-4 shadow-sm mb-4">
                <div
                  class="d-flex justify-content-between align-items-center mb-2"
                >
                  <span class="text-secondary small">狀態</span>
                  <span
                    class="badge bg-yellow-400 text-warning-emphasis rounded-pill px-3"
                    >草稿</span
                  >
                </div>
                <p class="text-muted mb-4" style="font-size: 12px">
                  最後編輯: 2026/03/31 15:00
                </p>
                <div class="d-flex flex-column gap-3">
                  <button
                    class="btn btn-outline-secondary py-3 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                  >
                    <Icon icon="ph:eye" /> 預覽頁面
                  </button>
                  <button
                    class="btn btn-outline-secondary py-3 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                  >
                    <Icon icon="ph:floppy-disk" /> 儲存草稿
                  </button>
                  <button
                    class="btn btn-dark py-3 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                  >
                    <Icon icon="ph:paper-plane-tilt" /> 發佈活動
                  </button>
                </div>
              </div>

              <!-- 快速選單 -->
              <div class="card border-0 rounded-4 bg-white p-4 shadow-sm">
                <h4 class="fs-6 fw-normal mb-3">快速選單</h4>
                <div class="d-flex flex-column gap-2">
                  <button
                    @click="scrollToSection('image')"
                    class="btn btn-link text-decoration-none text-secondary py-1 px-0 text-start justify-content-start hover-primary"
                  >
                    圖片設定
                  </button>
                  <button
                    @click="scrollToSection('basic')"
                    class="btn btn-link text-decoration-none text-secondary py-1 px-0 text-start justify-content-start hover-primary"
                  >
                    基本資訊
                  </button>
                  <button
                    @click="scrollToSection('time')"
                    class="btn btn-link text-decoration-none text-secondary py-1 px-0 text-start justify-content-start hover-primary"
                  >
                    時間地點
                  </button>
                  <button
                    @click="scrollToSection('description')"
                    class="btn btn-link text-decoration-none text-secondary py-1 px-0 text-start justify-content-start hover-primary"
                  >
                    活動介紹
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.hover-primary:hover {
  color: var(--text-brand-default) !important;
}

.quill-editor-wrapper {
  background-color: #fff;
  :deep(.ql-toolbar.ql-snow) {
    border: none;
    border-bottom: 1px solid var(--bs-border-color);
    padding: 0.75rem;
  }
  :deep(.ql-container.ql-snow) {
    border: none;
    font-family: inherit;
  }
}

.card {
  transition: all 0.2s ease-in-out;
}

.form-control,
.form-select {
  &:focus {
    box-shadow: none;
    border-color: var(--border-brand-default);
  }
}

.btn-dark {
  background-color: var(--background-brand-default);
  border-color: var(--border-brand-default);
}

.border-8 {
  border-width: 8px !important;
}

.sticky-top {
  z-index: 10;
}

.bg-yellow-400 {
  background-color: $yellow-400 !important;
}

input[type="date"],
input[type="time"] {
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
