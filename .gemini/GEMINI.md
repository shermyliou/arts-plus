# Project: Art+

## General Instructions
- When you generate new code, follow the existing coding style.
- Ensure all new functions and classes have JSDoc comments.
- Prefer functional programming paradigms where appropriate.
- If Figma data is missing or ambiguous, ask for clarification before generating code.

## Project Structure
```text
ART-PLUS/
├── .gemini/
│   ├── GEMINI.md
│   └── settings.json
├── public/
│   ├── images/
│   └── screenshot-home.png
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       ├── abstracts/
│   │       ├── overrides/
│   │       ├── tokens/
│   │       ├── _animations.scss
│   │       └── main.scss
│   ├── components/
│   │   ├── common/
│   │   │   ├── EventLayout.vue
│   │   │   ├── OrganizerLayout.vue
│   │   │   ├── OrganizerNavbar.vue
│   │   │   ├── PublicLayout.vue
│   │   │   ├── PublicNavbar.vue
│   │   │   ├── SideBar.vue
│   │   │   └── navbar.vue
│   │   └── ui/
│   │       ├── BookingCard.vue
│   │       ├── CalendarView.vue
│   │       ├── EventCard.vue
│   │       ├── EventNavTabs.vue
│   │       ├── FilterSidebar.vue
│   │       ├── FloatingNavTabs.vue
│   │       ├── HeroEventCard.vue
│   │       ├── HorizontalEventCard.vue
│   │       ├── NewsMarquee.vue
│   │       ├── NotificationOverlay.vue
│   │       ├── ReviewCard.vue
│   │       ├── SearchOverlay.vue
│   │       ├── UserOverlay.vue
│   │       └── VenueSelector.vue
│   ├── data/
│   │   ├── events.json
│   │   └── users.json
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   ├── useEventStore.js
│   │   └── useUserStore.js
│   ├── views/
│   │   ├── Basic.vue
│   │   ├── BootstrapChecker.vue
│   │   ├── EventDetail.vue
│   │   ├── EventEdit.vue
│   │   ├── HomeView.vue
│   │   ├── Search.vue
│   │   └── map.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

## Coding Style
- Use 2 spaces for indentation.
- Prefix interface names with `my` (for example, `myUserService`).
- Always use strict equality (`===` and `!==`).
- Use PascalCase to name new components

## Framework
- Use semantic tags and bootstrap CSS styles
- Use Vue in Composition API and javascript
- script setup is allowed to use
- The plugins used in this website are bootstrap, pinia, vue-router, axios
- Use the Iconify Vue component version of Phosphor Icons as default icons

## Already Known (skip re-reading these)
- Bootstrap is globally imported via main.js, do NOT re-check
- Phosphor Icons are used via Iconify: `<Icon icon="ph:icon-name" />`
- Color tokens are defined in src/assets/styles/_variables.scss
- Don't need to apple font family in css as the default fonts are already implemented.
- Iconify was imported in main.js in following codes:
```js
import { Icon } from '@iconify/vue'
app.component('Icon', Icon)
```

## Figma MCP server rules
  - The Figma MCP server provides an assets endpoint which can serve image and SVG assets
  - IMPORTANT: If the Figma MCP server returns a localhost source for an image or an SVG, use that image or SVG source directly
  - IMPORTANT: DO NOT import/add new icon packages, all the assets should be in the Figma payload
  - IMPORTANT: do NOT use or create placeholders if a localhost source is provided

## Figma MCP Integration Rules
These rules define how to translate Figma inputs into code for this project and must be followed for every Figma-driven change.

### Required flow (do not skip)
1. Run get_design_context first to fetch the structured representation for the exact node(s).
2. If the response is too large or truncated, run get_metadata to get the high‑level node map and then re‑fetch only the required node(s) with get_design_context.
3. Run get_screenshot for a visual reference of the node variant being implemented.
4. Only after you have both get_design_context and get_screenshot, download any assets needed and start implementation.
5. The Figma MCP output may be expressed as React + Tailwind — translate it into Vue + Bootstrap following this project's conventions. Reuse the project's color tokens, components, and typography wherever possible.
6. Validate against Figma for 1:1 look and behavior before marking complete.

### Implementation rules
- Treat the Figma MCP output (React + Tailwind) as a representation of design and behavior, not as final code style.
- Replace Tailwind utility classes with the project's preferred utilities/design‑system tokens when applicable. Prefer using Bootstrap's classes first before creating new classes.
- Reuse existing components (e.g., buttons, inputs, typography, icon wrappers) instead of duplicating functionality.
- Use the project's color system, typography scale, and spacing tokens consistently.
- Respect existing routing, state management, and data‑fetch patterns already adopted in the repo.
- The Figma design is only simple wireframe so the result in code may look different. Makesure when conflicts arise, prefer the layout ans structures in figma but use the bootstrap css style. May try to do some basic alignment ex. align-items-center instead of match the unaligned figma frames.
- Validate the final UI against the Figma screenshot for both look and behavior.