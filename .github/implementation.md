# **AutoHub Frontend Implementation Plan (Nuxt 4)**

This document details the implementation plan for the AutoHub frontend in **Nuxt 4**, mapping UI, pages, components, server routes, and API integration tasks to concrete subtasks and acceptance criteria.

**Base API URL:** `https://api.autohub.africa/`

---

# ✅ **Goals**

* Ship a production-ready **Nuxt 4** frontend using server-side rendering and Nitro routes where beneficial.
* Match the provided visual UI patterns (marketplace grid, filters sidebar, product details gallery layout).
* Provide robust authentication, product management, responsive design, and high performance / accessibility.

---

# **High-level Milestones**

1. Environment, setup & tooling
2. Design system & UI primitives
3. Data layer + authentication
4. Pages and route implementations
5. Image handling & forms
6. Testing, CI/CD
7. Observability, performance & QA

---

# **1. Environment & Setup (Nuxt 4)**

### **Environment variables (Nuxt 4 runtime config)**

`nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api.autohub.africa/',
      analyticsId: process.env.NUXT_PUBLIC_ANALYTICS_ID
    }
  }
})
```

`.env`:

```
NUXT_PUBLIC_API_BASE_URL=https://api.autohub.africa/
NUXT_PUBLIC_ANALYTICS_ID=
NODE_ENV=development
```

### **Dependencies (Nuxt 4 recommended)**

* `@pinia/nuxt`
* `nuxt` 4.x
* `zod` (validation)
* `@vueuse/core`
Use whatever dependencies are necessary

### **Acceptance criteria**

* `bun dev` boots Nuxt 4 and renders placeholder home page.

---

# **2. Updated Project Structure (Nuxt 4)**

```
/
├─ app/
│  ├─ components/          # Global components auto-imported
│  ├─ layouts/
│  ├─ pages/
│  ├─ plugins/
│  ├─ assets/
│  ├─ composables/
│  ├─ middleware/
│  ├─ stores/              # Pinia auto-loaded
│  └─ utils/
│
├─ server/
│  └─ api/                 # Optional proxy routes if needed
│
├─ public/                 # Static assets
├─ tests/
├─ .github/
│  └─ implementation.md
└─ nuxt.config.ts
```

### Notable Nuxt 4-specific changes:

* **Components auto-imported** (no need to register).
* **Pages live under `app/pages/`**, replacing global `/pages`.
* **Composables auto-imported** from `app/composables/`.
* **Pinia auto-loaded** from `app/stores/`.
* **Middleware** under `app/middleware/routeName.ts`.
* **Optional server API** in `/server/api` for proxying if CORS or auth cookie issues.

---

# **3. Design System & UI Kit**

### Tokens in `app/assets/tokens.css` (or `tailwind.config` if using Tailwind)

* color palette
* spacing scale
* typography
* border radii
* breakpoints

### Ensure you use NUXT UI
Nuxt UI MCP has been added to make things easier

### Acceptance criteria

* `/ui-preview` page that displays all primitives.

---

# **4. Data Layer & Auth (Nuxt 4)**

### **API Client**

Create composable:

`app/composables/useApi.ts`:

```ts
export const useApi = () => {
  const config = useRuntimeConfig()

  return $fetch.create({
    baseURL: config.public.apiBase,
    onResponse({ response }) {
      // unwrap API envelope
      if (response._data?.data !== undefined) {
        response._data = response._data.data
      }
    }
  })
}
```

### **Auth Flow**

Endpoints:

* `POST /api/auth/login`
* `POST /api/auth/signup-member`
* `POST /api/auth/signup-dealer`
* Password reset flows

### **Auth Store** (`app/stores/auth.ts`)

Stores:

* `user`
* `token`
* `roles`
* Methods:

  * `login()`
  * `logout()`
  * `loadProfile()`

### **Route middleware**

`app/middleware/auth.global.ts`:

```ts
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return navigateTo('/auth/login')
  }
})
```

### **Acceptance criteria**

* Login persists across reloads.
* Protected routes redirect to login if not authenticated.

---

# **5. Page Implementations (Nuxt 4 File Structure)**

### 1. Home (`app/pages/index.vue`)

Components:

* `HeroSearch`
* `CategoryTiles`
* `FeaturedProductsGrid`

API:

* `/api/landing`
* `/api/data`

### 2. Listings (`app/pages/listings/index.vue`)

Components:

* `SidebarFilters`
* `ProductGrid`
* `Pagination`

API:

* `/api/active/{page}/{per_page}`

Features:

* Filters in URL query
* Server-side pagination
* Loaders + error UI

### 3. Product Detail (`app/pages/product/[slug].vue`)

Components:

* `ImageGallery`
* `ProductSummaryCard`
* `SpecsList`
* `RelatedProducts`

API:

* `/api/detail/{slug}`

### 4. Sell (`app/pages/sell/index.vue`) 

Components:

* `ProductForm` (multi-step)
* `ImageUploader`
* `PreviewCard`

API:

* `/api/users/create`, `/api/users/update`

### 5. Account (`app/pages/account/*`)

* `account/index.vue` – Profile
* `account/products.vue` – My Products
* `account/wishlist.vue`

### 6. Auth Pages

* `/auth/login`
* `/auth/signup`
* Password flows

### **Acceptance criteria**

* All pages functional with full API linking.
* Fully responsive.

---

# **6. Image & Media Handling**

`ImageUploader.vue` features:

* Drag & drop
* Reorder
* Choose primary image
* Client-side compression via canvas
* Base64 formatting per backend spec

Acceptance criteria:

* Product creation with multiple images works end to end.

---

# **7. State Management & Caching**

Stores:

* `auth` – user + token
* `products` – cached listings keyed by filters
* `ui` – toasts, dialog state

Caching:

* Cache `/api/data` at app init → localStorage (Nuxt 4 `useLocalStorage`)

---

# **8. Forms & Validation**

* Use `zod` schemas per form
* Server errors displayed inline
* Prevent bad payloads before hitting API

---

# **9. Accessibility & Responsive**

* `aria` labels
* Keyboard navigability
* Component contrast meets WCAG
* Mobile layouts for:

  * Filters drawer
  * Sticky contact bar
  * Stacked product gallery

Acceptance:

* Lighthouse accessibility ≥ 90

---

# **10. Testing Strategy (Nuxt 4)**

Unit tests: Vitest
E2E: Playwright

* Browse listings
* View product detail
* Login and create product

CI runs full suite.

---

# **11. CI/CD (GitHub → Vercel/Nitro Deploy)**

PR pipeline:

* Lint
* Typecheck
* Test
* Build
* Deploy preview

Main merges deploy to production.

---

# **13. Performance**

* Component-level lazy loading
* `v-lazy-image` pattern or `useIntersectionObserver`
* Use WebP or AVIF
* Nitro-level caching on proxy routes if used

---

# **14. Security**

* Prefer server-set httpOnly cookies
* Sanitise inputs
* Avoid storing PII in localStorage

---

# **15. Documentation & Handoff**

* Updated `README.md`
* Implementation plan stored at `.github/implementation.md`

---

# **16. Release Checklist**

* Run all tests
* Accessibility pass
* Performance pass
* SEO (sitemap, meta tags)
* Verify all user flows

---

# ✅ **Acceptance Criteria Summary**

* App runs on Nuxt 4 & fetches data from `https://api.autohub.africa/`.
* Authentication is fully implemented.
* Users can browse listings, view details, and create products (with images).
* UI matches design and is responsive & accessible.
