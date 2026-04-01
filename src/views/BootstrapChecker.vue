<template>
  <div class="checker-wrapper">
    <!-- Header -->
    <header class="checker-header">
      <h1 class="checker-title">Bootstrap Remap Checker</h1>
      <p class="checker-subtitle">用來驗證 Bootstrap 變數覆寫是否成功套用</p>
    </header>

    <div class="checker-body">
      <!-- ───────────────────────────────── Typography ─── -->
      <section class="checker-section">
        <div class="section-label">Typography / 標題</div>
        <div class="section-content">
          <h1>H1 — 主要標題 Heading 1</h1>
          <h2>H2 — 次要標題 Heading 2</h2>
          <h3>H3 — 三級標題 Heading 3</h3>
          <h4>H4 — 四級標題 Heading 4</h4>
          <h5>H5 — 五級標題 Heading 5</h5>
          <h6>H6 — 六級標題 Heading 6</h6>
          <hr />
          <p class="lead">Lead — 引言段落文字，用於頁面開頭的摘要描述</p>
          <p>
            Body — 一般正文段落，Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <p class="text-muted">text-muted — 次要說明文字，通常用於補充資訊</p>
          <small>small — 小字，用於版權聲明、footnote 等</small>
        </div>
      </section>

      <!-- ───────────────────────────────── Colors ─── -->
      <section class="checker-section">
        <div class="section-label">Theme Colors / 主題色彩</div>
        <div class="section-content">
          <div class="color-grid">
            <div
              v-for="color in themeColors"
              :key="color.name"
              class="color-row"
            >
              <span class="color-name-label">{{ color.label }}</span>
              <div class="color-swatches">
                <div
                  class="color-swatch"
                  :class="`bg-${color.name}`"
                  :title="`bg-${color.name}`"
                >
                  <span class="swatch-label">.bg-{{ color.name }}</span>
                </div>
                <div
                  class="color-swatch swatch-subtle"
                  :class="`bg-${color.name}-subtle`"
                  :title="`bg-${color.name}-subtle`"
                >
                  <span
                    class="swatch-label"
                    :class="`text-${color.name}-emphasis`"
                    >.bg-{{ color.name }}-subtle</span
                  >
                </div>
                <div
                  class="color-swatch swatch-text d-flex align-items-center justify-content-center gap-2"
                >
                  <span :class="`text-${color.name}`"
                    >.text-{{ color.name }}</span
                  >
                  <span :class="`text-${color.name}-emphasis`"
                    >.text-{{ color.name }}-emphasis</span
                  >
                </div>
                <button class="btn btn-sm" :class="`btn-${color.name}`">
                  .btn-{{ color.name }}
                </button>
                <button class="btn btn-sm" :class="`btn-outline-${color.name}`">
                  .btn-outline-{{ color.name }}
                </button>
                <span class="badge" :class="`bg-${color.name}`">.badge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Body BG ─── -->
      <section class="checker-section">
        <div class="section-label">Body Background Colors / 背景色</div>
        <div class="section-content d-flex gap-3 flex-wrap">
          <div
            class="bg-body p-3 border rounded text-center"
            style="min-width: 160px"
          >
            <code>.bg-body</code>
          </div>
          <div
            class="bg-body-secondary p-3 border rounded text-center"
            style="min-width: 160px"
          >
            <code>.bg-body-secondary</code>
          </div>
          <div
            class="bg-body-tertiary p-3 border rounded text-center"
            style="min-width: 160px"
          >
            <code>.bg-body-tertiary</code>
          </div>
          <div
            class="bg-black text-white p-3 border rounded text-center"
            style="min-width: 160px"
          >
            <code>.bg-black</code>
          </div>
          <div
            class="bg-white p-3 border rounded text-center"
            style="min-width: 160px"
          >
            <code>.bg-white</code>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Buttons ─── -->
      <section class="checker-section">
        <div class="section-label">Buttons / 按鈕</div>
        <div class="section-content">
          <p class="item-desc">Solid buttons — 實心按鈕</p>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <!-- <button
              v-for="color in themeColors"
              :key="color.name"
              class="btn"
              :class="`btn-${color.name}`"
            >
              {{ color.label }}
            </button> -->
            <button class="btn btn-primary">主要按鈕</button>
            <!-- <button class="btn btn-light">Light</button>
            <button class="btn btn-dark">Dark</button> -->
          </div>

          <p class="item-desc">Outline buttons — 外框按鈕</p>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <!-- <button
              v-for="color in themeColors"
              :key="color.name"
              class="btn"
              :class="`btn-outline-${color.name}`"
            >
              {{ color.label }}
            </button> -->
            <button class="btn btn-outline-secondary">次要按鈕</button>
            <!-- <button class="btn btn-outline-light">Light</button>
            <button class="btn btn-outline-dark">Dark</button> -->
          </div>

          <p class="item-desc">Sizes — 按鈕尺寸</p>
          <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
            <button class="btn btn-primary btn-lg">大按鈕</button>
            <button class="btn btn-primary">預設按鈕</button>
            <button class="btn btn-primary btn-sm">小按鈕</button>
          </div>

          <p class="item-desc">States — 按鈕狀態</p>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary active">Active</button>
            <button class="btn btn-primary disabled">不可使用</button>
            <button class="btn btn-primary">
              <span class="spinner-border spinner-border-sm me-1"></span>Loading
            </button>
          </div>
          <br />
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-outline-secondary active">Active</button>
            <button class="btn btn-outline-secondary disabled">不可使用</button>
            <button class="btn btn-outline-secondary">
              <span class="spinner-border spinner-border-sm me-1"></span>Loading
            </button>
          </div>
        </div>

        <div class="section-content">
          <p class="item-desc">Solid buttons — 實心按鈕</p>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <button class="btn btn-primary btn-rect">主要按鈕</button>
            <button class="btn btn-link">Link</button>
          </div>

          <p class="item-desc">Outline buttons — 外框按鈕</p>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <button class="btn btn-outline-secondary btn-rect">次要按鈕</button>
          </div>

          <p class="item-desc">Sizes — 按鈕尺寸</p>
          <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
            <button class="btn btn-primary btn-lg btn-rect">大按鈕</button>
            <button class="btn btn-primary btn-rect">預設按鈕</button>
            <button class="btn btn-primary btn-sm btn-rect">小按鈕</button>
          </div>

          <p class="item-desc">States — 按鈕狀態</p>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary active btn-rect">Active</button>
            <button class="btn btn-primary disabled btn-rect">Disabled</button>
            <button class="btn btn-primary btn-rect">
              <span class="spinner-border spinner-border-sm me-1"></span>Loading
            </button>
          </div>
          <br />
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-outline-secondary active btn-rect">
              Active
            </button>
            <button class="btn btn-outline-secondary disabled btn-rect">
              Disabled
            </button>
            <button class="btn btn-outline-secondary btn-rect">
              <span class="spinner-border spinner-border-sm me-1"></span>Loading
            </button>
          </div>
          <br>
          <p class="item-desc">Text buttons — 文字按鈕</p>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <button class="btn btn-link">文字按鈕</button>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Badges ─── -->
      <section class="checker-section">
        <div class="section-label">Badges / 徽章標籤</div>
        <div class="section-content d-flex flex-wrap gap-2">
          <span
            v-for="color in themeColors"
            :key="color.name"
            class="badge"
            :class="`bg-${color.name}`"
          >
            {{ color.label }}
          </span>
          <span class="badge bg-light text-dark">Light</span>
          <span class="badge bg-dark">Dark</span>
          <span class="badge rounded-pill bg-primary">Pill Primary</span>
          <span class="badge rounded-pill bg-secondary">Pill Secondary</span>
        </div>
      </section>

      <!-- ───────────────────────────────── Alerts ─── -->
      <section class="checker-section">
        <div class="section-label">Alerts / 提示訊息</div>
        <div class="section-content">
          <div
            v-for="color in themeColors"
            :key="color.name"
            class="alert d-flex align-items-start gap-2"
            :class="`alert-${color.name}`"
          >
            <strong>{{ color.label }}：</strong>這是
            <code>.alert-{{ color.name }}</code>
            的提示訊息樣式，用於顯示不同狀態的通知。
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Forms ─── -->
      <section class="checker-section">
        <div class="section-label">Forms / 表單元件</div>
        <div class="section-content">
          <div class="row g-3">
            <div class="col-md-6">
              <p class="item-desc">Text Input — 文字輸入框</p>
              <input
                type="text"
                class="form-control"
                placeholder="一般輸入框 .form-control"
              />
            </div>
            <div class="col-md-6">
              <p class="item-desc">Disabled Input — 禁用輸入框</p>
              <input
                type="text"
                class="form-control"
                placeholder="禁用狀態"
                disabled
              />
            </div>
            <div class="col-md-6">
              <p class="item-desc">Valid Input — 驗證成功</p>
              <input
                type="text"
                class="form-control is-valid"
                value="正確的值"
              />
              <div class="valid-feedback">看起來不錯！</div>
            </div>
            <div class="col-md-6">
              <p class="item-desc">Invalid Input — 驗證失敗</p>
              <input
                type="text"
                class="form-control is-invalid"
                value="錯誤的值"
              />
              <div class="invalid-feedback">請輸入正確的值。</div>
            </div>
            <div class="col-md-6">
              <p class="item-desc">Select — 下拉選單</p>
              <select class="form-select">
                <option>選項一</option>
                <option>選項二</option>
                <option>選項三</option>
              </select>
            </div>
            <div class="col-md-6">
              <p class="item-desc">Textarea — 多行輸入</p>
              <textarea
                class="form-control"
                rows="3"
                placeholder="多行文字輸入框"
              ></textarea>
            </div>
            <div class="col-12">
              <p class="item-desc">Checkboxes & Radios — 勾選與單選</p>
              <div class="d-flex flex-wrap gap-4">
                <div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="check1"
                      checked
                    />
                    <label class="form-check-label" for="check1"
                      >Checkbox 勾選</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="check2"
                    />
                    <label class="form-check-label" for="check2"
                      >Checkbox 未勾選</label
                    >
                  </div>
                </div>
                <div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio1"
                      id="radio1"
                      checked
                    />
                    <label class="form-check-label" for="radio1"
                      >Radio 已選</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radio1"
                      id="radio2"
                    />
                    <label class="form-check-label" for="radio2"
                      >Radio 未選</label
                    >
                  </div>
                </div>
                <div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="switch1"
                      checked
                    />
                    <label class="form-check-label" for="switch1"
                      >Switch 開啟</label
                    >
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="switch2"
                    />
                    <label class="form-check-label" for="switch2"
                      >Switch 關閉</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <p class="item-desc">Range — 滑桿</p>
              <input type="range" class="form-range" value="50" />
            </div>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Cards ─── -->
      <section class="checker-section">
        <div class="section-label">Cards / 卡片</div>
        <div class="section-content">
          <div class="row g-3">
            <div class="col-md-4">
              <p class="item-desc">基本卡片</p>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">卡片標題</h5>
                  <p class="card-text">
                    這是卡片的內文，描述這張卡片的主要內容。
                  </p>
                  <a href="#" class="btn btn-primary">行動按鈕</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <p class="item-desc">含 Header/Footer</p>
              <div class="card">
                <div class="card-header">卡片 Header</div>
                <div class="card-body">
                  <h5 class="card-title">標題</h5>
                  <p class="card-text">卡片內文。</p>
                </div>
                <div class="card-footer text-muted">卡片 Footer</div>
              </div>
            </div>
            <div class="col-md-4">
              <p class="item-desc">Colored Card</p>
              <div class="card text-white bg-primary">
                <div class="card-body">
                  <h5 class="card-title">Primary 卡片</h5>
                  <p class="card-text">套用主題色的卡片樣式。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Navbar ─── -->
      <section class="checker-section">
        <div class="section-label">Navbar / 導覽列</div>
        <div class="section-content d-flex flex-column gap-3">
          <div>
            <p class="item-desc">navbar-light bg-light</p>
            <nav
              class="navbar navbar-expand navbar-light bg-light rounded px-3"
            >
              <a class="navbar-brand" href="#">Brand</a>
              <div class="navbar-nav">
                <a class="nav-link active" href="#">首頁</a>
                <a class="nav-link" href="#">關於</a>
                <a class="nav-link disabled">停用</a>
              </div>
            </nav>
          </div>
          <div>
            <p class="item-desc">navbar-dark bg-primary</p>
            <nav
              class="navbar navbar-expand navbar-dark bg-primary rounded px-3"
            >
              <a class="navbar-brand" href="#">Brand</a>
              <div class="navbar-nav">
                <a class="nav-link active" href="#">首頁</a>
                <a class="nav-link" href="#">關於</a>
                <a class="nav-link disabled">停用</a>
              </div>
            </nav>
          </div>
          <div>
            <p class="item-desc">navbar-dark bg-dark</p>
            <nav class="navbar navbar-expand navbar-dark bg-dark rounded px-3">
              <a class="navbar-brand" href="#">Brand</a>
              <div class="navbar-nav">
                <a class="nav-link active" href="#">首頁</a>
                <a class="nav-link" href="#">關於</a>
                <a class="nav-link disabled">停用</a>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Modals ─── -->
      <section class="checker-section">
        <div class="section-label">Modal / 彈出視窗（靜態預覽）</div>
        <div class="section-content">
          <p class="item-desc">
            Static modal preview — 靜態預覽（不帶 JS 行為）
          </p>
          <div
            class="modal position-static d-block"
            tabindex="-1"
            style="z-index: 1"
          >
            <div class="modal-dialog" style="max-width: 480px">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal 標題</h5>
                  <button type="button" class="btn-close"></button>
                </div>
                <div class="modal-body">
                  這是 modal 的內文區域，可以放入任意內容。
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary">取消</button>
                  <button type="button" class="btn btn-primary">確認</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Tables ─── -->
      <section class="checker-section">
        <div class="section-label">Tables / 表格</div>
        <div class="section-content">
          <p class="item-desc">基本表格 + 主題色列</p>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>名稱</th>
                  <th>狀態</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>預設列</td>
                  <td><span class="badge bg-secondary">一般</span></td>
                  <td>
                    <button class="btn btn-sm btn-outline-primary">編輯</button>
                  </td>
                </tr>
                <tr class="table-primary">
                  <td>2</td>
                  <td>Primary 列</td>
                  <td><span class="badge bg-primary">主要</span></td>
                  <td>
                    <button class="btn btn-sm btn-outline-primary">編輯</button>
                  </td>
                </tr>
                <tr class="table-success">
                  <td>3</td>
                  <td>Success 列</td>
                  <td><span class="badge bg-success">成功</span></td>
                  <td>
                    <button class="btn btn-sm btn-outline-success">編輯</button>
                  </td>
                </tr>
                <tr class="table-danger">
                  <td>4</td>
                  <td>Danger 列</td>
                  <td><span class="badge bg-danger">危險</span></td>
                  <td>
                    <button class="btn btn-sm btn-outline-danger">編輯</button>
                  </td>
                </tr>
                <tr class="table-warning">
                  <td>5</td>
                  <td>Warning 列</td>
                  <td><span class="badge bg-warning text-dark">警告</span></td>
                  <td>
                    <button class="btn btn-sm btn-outline-warning">編輯</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="item-desc mt-3">Striped + Hover 表格</p>
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>項目</th>
                  <th>數值</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in 4" :key="n">
                  <td>{{ n }}</td>
                  <td>項目 {{ n }}</td>
                  <td>{{ n * 100 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── List Group ─── -->
      <section class="checker-section">
        <div class="section-label">List Group / 清單群組</div>
        <div class="section-content">
          <div class="row g-3">
            <div class="col-md-4">
              <p class="item-desc">基本清單</p>
              <ul class="list-group">
                <li class="list-group-item active">Active 項目</li>
                <li class="list-group-item">一般項目</li>
                <li class="list-group-item">一般項目</li>
                <li class="list-group-item disabled">Disabled 項目</li>
              </ul>
            </div>
            <div class="col-md-4">
              <p class="item-desc">主題色清單</p>
              <ul class="list-group">
                <li
                  v-for="color in themeColors"
                  :key="color.name"
                  class="list-group-item"
                  :class="`list-group-item-${color.name}`"
                >
                  list-group-item-{{ color.name }}
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <p class="item-desc">含 Badge 清單</p>
              <ul class="list-group">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  通知 <span class="badge bg-primary rounded-pill">14</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  訊息 <span class="badge bg-danger rounded-pill">3</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  更新 <span class="badge bg-success rounded-pill">2</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Nav & Tabs ─── -->
      <section class="checker-section">
        <div class="section-label">Nav & Tabs / 導覽標籤</div>
        <div class="section-content d-flex flex-column gap-3">
          <div>
            <p class="item-desc">Tabs</p>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Tab 2</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Tab 3</a></li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="item-desc">Pills</p>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Pill 2</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Pill 3</a></li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Progress ─── -->
      <section class="checker-section">
        <div class="section-label">Progress Bars / 進度條</div>
        <div class="section-content d-flex flex-column gap-2">
          <div v-for="color in themeColors" :key="color.name">
            <small class="text-muted">.bg-{{ color.name }}</small>
            <div class="progress" style="height: 18px">
              <div
                class="progress-bar"
                :class="`bg-${color.name}`"
                :style="`width: ${color.width}%`"
              >
                {{ color.width }}%
              </div>
            </div>
          </div>
          <div>
            <small class="text-muted">Striped + Animated</small>
            <div class="progress" style="height: 18px">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                style="width: 65%"
              >
                65%
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Breadcrumb ─── -->
      <section class="checker-section">
        <div class="section-label">Breadcrumb / 麵包屑導覽</div>
        <div class="section-content">
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">首頁</a></li>
              <li class="breadcrumb-item"><a href="#">分類</a></li>
              <li class="breadcrumb-item active">目前頁面</li>
            </ol>
          </nav>
        </div>
      </section>

      <!-- ───────────────────────────────── Pagination ─── -->
      <section class="checker-section">
        <div class="section-label">Pagination / 分頁</div>
        <div class="section-content d-flex flex-column gap-3">
          <div>
            <p class="item-desc">一般分頁</p>
            <nav>
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#">«</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">»</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <p class="item-desc">Large 分頁</p>
            <nav>
              <ul class="pagination pagination-lg">
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Spinner ─── -->
      <section class="checker-section">
        <div class="section-label">Spinners / 載入動畫</div>
        <div class="section-content d-flex flex-wrap gap-3 align-items-center">
          <div
            v-for="color in themeColors"
            :key="color.name"
            class="text-center"
          >
            <div
              class="spinner-border"
              :class="`text-${color.name}`"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <div
              class="spinner-grow mt-2"
              :class="`text-${color.name}`"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <small class="d-block text-muted mt-1">{{ color.name }}</small>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Accordion ─── -->
      <section class="checker-section">
        <div class="section-label">Accordion / 手風琴折疊</div>
        <div class="section-content">
          <div class="accordion" id="checkerAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc1"
                >
                  Accordion 項目 1（預設展開）
                </button>
              </h2>
              <div
                id="acc1"
                class="accordion-collapse collapse show"
                data-bs-parent="#checkerAccordion"
              >
                <div class="accordion-body">
                  這是第一個 accordion 的內文，目前是展開狀態。
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc2"
                >
                  Accordion 項目 2（預設收合）
                </button>
              </h2>
              <div
                id="acc2"
                class="accordion-collapse collapse"
                data-bs-parent="#checkerAccordion"
              >
                <div class="accordion-body">這是第二個 accordion 的內文。</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Tooltip / Popover hint ─── -->
      <section class="checker-section">
        <div class="section-label">Input Groups / 輸入群組</div>
        <div
          class="section-content d-flex flex-column gap-2"
          style="max-width: 500px"
        >
          <div class="input-group">
            <span class="input-group-text">@</span>
            <input type="text" class="form-control" placeholder="Username" />
          </div>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜尋..." />
            <button class="btn btn-primary" type="button">搜尋</button>
          </div>
          <div class="input-group">
            <span class="input-group-text">$</span>
            <input type="number" class="form-control" placeholder="金額" />
            <span class="input-group-text">TWD</span>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────── Offcanvas static ─── -->
      <section class="checker-section">
        <div class="section-label">Toast / 通知提示（靜態預覽）</div>
        <div class="section-content">
          <div class="toast show" role="alert" style="min-width: 280px">
            <div class="toast-header">
              <strong class="me-auto">通知標題</strong>
              <small class="text-muted">剛剛</small>
              <button type="button" class="btn-close ms-2"></button>
            </div>
            <div class="toast-body">
              這是 Toast 通知的內文，用於顯示短暫的操作回饋。
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const themeColors = [
  { name: "primary", label: "Primary", width: 80 },
  { name: "secondary", label: "Secondary", width: 65 },
  { name: "success", label: "Success", width: 70 },
  { name: "danger", label: "Danger", width: 45 },
  { name: "warning", label: "Warning", width: 55 },
  { name: "info", label: "Info", width: 60 },
];
</script>

<style scoped>
.checker-wrapper {
  font-family: inherit;
  background: var(--bs-body-bg, #f8f9fa);
  min-height: 100vh;
  padding-bottom: 4rem;
}

.checker-header {
  background: var(--bs-primary, #0d6efd);
  color: #fff;
  padding: 2.5rem 2rem 2rem;
  margin-bottom: 0;
}

.checker-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}

.checker-subtitle {
  opacity: 0.85;
  margin: 0;
  font-size: 0.95rem;
}

.checker-body {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.checker-section {
  background: var(--bs-body-bg, #fff);
  border: 1px solid var(--bs-border-color, #dee2e6);
  border-radius: 0.5rem;
  overflow: hidden;
}

.section-label {
  background: var(--bs-body-tertiary, #f8f9fa);
  border-bottom: 1px solid var(--bs-border-color, #dee2e6);
  padding: 0.6rem 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--bs-secondary-color, #6c757d);
}

.section-content {
  padding: 1.5rem 1.25rem;
}

.item-desc {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--bs-secondary-color, #6c757d);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.5rem;
}

/* Color grid */
.color-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.color-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.color-name-label {
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 80px;
  color: var(--bs-body-color);
}

.color-swatches {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.color-swatch {
  width: 140px;
  height: 48px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.swatch-subtle {
  border: 1px solid var(--bs-border-color, #dee2e6);
}

.swatch-text {
  width: auto;
  height: auto;
  padding: 0.25rem 0;
  border: none;
  gap: 1rem;
  font-size: 0.85rem;
}

.swatch-label {
  font-size: 0.7rem;
  font-family: monospace;
  color: rgba(255, 255, 255, 0.9);
}

.swatch-subtle .swatch-label {
  color: inherit;
}
</style>
