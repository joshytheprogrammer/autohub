<script setup >
const categories = [
  { name: 'SUV', icon: 'i-lucide-car-front', count: 1240 },
  { name: 'Sedan', icon: 'i-lucide-car', count: 850 },
  { name: 'Hatchback', icon: 'i-lucide-car-taxi-front', count: 420 },
  { name: 'Coupe', icon: 'i-lucide-zap', count: 120 },
  { name: 'Convertible', icon: 'i-lucide-sun', count: 85 },
  { name: 'Pickup', icon: 'i-lucide-truck', count: 340 },
  { name: 'Van', icon: 'i-lucide-bus', count: 150 },
  { name: 'Electric', icon: 'i-lucide-plug-zap', count: 95 }
]
</script>

<template>
  <section class="py-12 bg-gray-50 dark:bg-gray-900/50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Browse by Category</h2>
          <p class="text-gray-500 dark:text-gray-400 mt-1">Find the perfect vehicle for your lifestyle</p>
        </div>
        <UButton variant="ghost" color="gray" to="/listings" trailing-icon="i-heroicons-arrow-right">
          View All
        </UButton>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <NuxtLink 
          v-for="category in categories" 
          :key="category.name"
          :to="`/listings?category=${category.name.toLowerCase()}`"
          class="group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-md transition-all duration-200"
        >
          <div class="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <UIcon :name="category.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <span class="font-medium text-gray-900 dark:text-white text-sm">{{ category.name }}</span>
          <span class="text-xs text-gray-400 mt-1">{{ category.count }} cars</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
