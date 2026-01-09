<script setup>
defineProps({
  product: {
    id: '',
    title: '',
    price: 0,
    image: '',
    location: '',
    year: '',
    mileage: '',
    transmission: ''
  }
})

function formatCurrency(value) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(value)
}
</script>

<template>
  <UCard class="group cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:ring-2 hover:ring-primary-500/50" :ui="{ body: 'p-0', footer: 'p-4' }">
    <div class="relative aspect-4/3 overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div class="absolute top-2 right-2">
        <UButton icon="i-heroicons-heart" color="white" variant="solid" size="xs" class="rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4">
        <p class="text-white font-bold text-lg">{{ formatCurrency(product.price) }}</p>
      </div>
    </div>

    <template #footer>
      <div class="space-y-2">
        <h3 class="font-semibold text-gray-900 dark:text-white truncate">{{ product.year }} {{ product.title }}</h3>
        
        <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-1">
            <UIcon name="i-heroicons-map-pin" />
            <span>{{ product.location }}</span>
          </div>
          <span>•</span>
          <span>{{ product.mileage.toLocaleString() }} km</span>
          <span>•</span>
          <span>{{ product.transmission }}</span>
        </div>
      </div>
    </template>
  </UCard>
</template>
