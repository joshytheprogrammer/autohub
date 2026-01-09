<script setup>
definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

const savedCars = ref([
  {
    id: 1,
    title: '2021 Porsche 911 Carrera S',
    price: 125000,
    mileage: '12,500 km',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dateAdded: '2 days ago'
  },
  {
    id: 2,
    title: '2019 Mercedes-AMG C63 S',
    price: 72000,
    mileage: '35,000 km',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dateAdded: '1 week ago'
  },
  {
    id: 3,
    title: '2022 Audi RS6 Avant',
    price: 118000,
    mileage: '8,000 km',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dateAdded: '2 weeks ago'
  },
  {
    id: 4,
    title: '2020 BMW M2 CS',
    price: 85000,
    mileage: '15,000 km',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dateAdded: '1 month ago'
  }
])

const removeSaved = (id) => {
  savedCars.value = savedCars.value.filter(car => car.id !== id)
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar -->
      <aside class="w-full md:w-64 space-y-4">
        <UCard>
          <div class="flex flex-col items-center py-4">
            <UAvatar :src="auth.user?.avatar" :alt="auth.user?.name" size="3xl" />
            <h3 class="mt-4 font-semibold text-lg">{{ auth.user?.name }}</h3>
            <p class="text-gray-500 text-sm">{{ auth.user?.email }}</p>
            <UButton to="/sell" block class="mt-6" icon="i-heroicons-plus">Sell a Car</UButton>
          </div>
        </UCard>

        <nav class="space-y-1">
          <UButton to="/account" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-home">Dashboard</UButton>
          <UButton to="/account/products" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-list-bullet">My Listings</UButton>
          <UButton to="/account/messages" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-chat-bubble-left-right">Messages</UButton>
          <UButton to="/account/saved" block variant="soft" color="primary" class="justify-start" icon="i-heroicons-heart">Saved Cars</UButton>
          <UButton to="/account/settings" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-cog-6-tooth">Settings</UButton>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 space-y-6">
        <h1 class="text-2xl font-bold">Saved Cars</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard v-for="car in savedCars" :key="car.id" :ui="{ body: { padding: 'p-0' } }" class="group">
            <div class="relative aspect-[16/10] overflow-hidden">
              <img :src="car.image" :alt="car.title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div class="absolute top-2 right-2">
                <UButton 
                  icon="i-heroicons-heart-solid" 
                  color="red" 
                  variant="solid" 
                  size="sm" 
                  :ui="{ rounded: 'rounded-full' }"
                  @click="removeSaved(car.id)"
                />
              </div>
            </div>
            
            <div class="p-4">
              <h3 class="font-semibold text-lg truncate">
                <NuxtLink :to="`/product/${car.id}`" class="hover:text-primary-500">{{ car.title }}</NuxtLink>
              </h3>
              <p class="text-xl font-bold mt-1">${{ car.price.toLocaleString() }}</p>
              
              <div class="flex items-center gap-4 mt-3 text-sm text-gray-500">
                <div class="flex items-center gap-1">
                  <UIcon name="i-heroicons-map-pin" />
                  <span class="truncate">{{ car.location }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <UIcon name="i-heroicons-clock" />
                  <span>{{ car.mileage }}</span>
                </div>
              </div>
              
              <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <span class="text-xs text-gray-400">Added {{ car.dateAdded }}</span>
                <UButton :to="`/product/${car.id}`" size="sm" variant="ghost" color="primary" trailing-icon="i-heroicons-arrow-right">View Details</UButton>
              </div>
            </div>
          </UCard>
        </div>
        
        <div v-if="savedCars.length === 0" class="text-center py-12">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <UIcon name="i-heroicons-heart" class="w-8 h-8 text-gray-400" />
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">No saved cars yet</h3>
          <p class="mt-1 text-gray-500">Start browsing and save your favorite cars to view them later.</p>
          <UButton to="/listings" class="mt-6">Browse Cars</UButton>
        </div>
      </main>
    </div>
  </div>
</template>
