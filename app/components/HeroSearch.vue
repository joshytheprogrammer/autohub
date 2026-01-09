<script setup>
const search = ref('')
const activeTab = ref(0)

const tabs = [
  { label: 'Buy', icon: 'i-heroicons-shopping-bag' },
  { label: 'Rent', icon: 'i-heroicons-key' },
  { label: 'Sell', icon: 'i-heroicons-currency-dollar' }
]

const handleSearch = () => {
  navigateTo({
    path: '/listings',
    query: { q: search.value, type: tabs[activeTab.value].label.toLowerCase() }
  })
}
</script>

<template>
  <div class="relative h-[500px] flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" 
        alt="Hero Background" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center space-y-8 max-w-4xl">
      <div class="space-y-4">
        <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Find Your Dream Car <span class="text-primary-400">Today</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          The most trusted marketplace for buying, selling, and renting vehicles in Africa.
        </p>
      </div>

      <!-- Search Box -->
      <div class="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl">
        <div class="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg">
          <!-- Tabs -->
          <div class="flex gap-4 mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
            <button 
              v-for="(tab, index) in tabs" 
              :key="tab.label"
              @click="activeTab = index"
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              :class="activeTab === index ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'"
            >
              <UIcon :name="tab.icon" class="w-5 h-5" />
              {{ tab.label }}
            </button>
          </div>

          <!-- Input Group -->
          <div class="flex flex-col md:flex-row gap-3">
            <div class="flex-1">
              <UInput 
                v-model="search"
                icon="i-heroicons-magnifying-glass"
                size="xl"
                placeholder="Search by make, model, or keyword..."
                :ui="{ icon: { trailing: { pointer: '' } } }"
                class="w-full"
                @keyup.enter="handleSearch"
              />
            </div>
            <UButton 
              size="xl" 
              color="primary" 
              class="px-8 font-bold"
              @click="handleSearch"
            >
              Search Cars
            </UButton>
          </div>
        </div>
      </div>

      <!-- Quick Stats or Trust Indicators -->
      <div class="flex justify-center gap-8 text-white/80 text-sm font-medium pt-4">
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-check-badge" class="w-5 h-5 text-primary-400" />
          <span>Verified Dealers</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-primary-400" />
          <span>Secure Payments</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-truck" class="w-5 h-5 text-primary-400" />
          <span>Nationwide Delivery</span>
        </div>
      </div>
    </div>
  </div>
</template>
