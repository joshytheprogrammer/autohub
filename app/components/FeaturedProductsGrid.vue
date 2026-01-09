<script setup>
// Mock data for now - normally fetched via API
const products = [
  {
    id: '1',
    title: 'Toyota Land Cruiser Prado',
    price: 8500000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    location: 'Abuja, Nigeria',
    year: 2020,
    mileage: 45000,
    transmission: 'Automatic'
  },
  {
    id: '2',
    title: 'Mercedes-Benz C-Class',
    price: 4200000,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop',
    location: 'Mombasa, Nigeria',
    year: 2018,
    mileage: 62000,
    transmission: 'Automatic'
  },
  {
    id: '3',
    title: 'Subaru Forester XT',
    price: 2800000,
    image: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&w=800&auto=format&fit=crop',
    location: 'Nakuru, Nigeria',
    year: 2016,
    mileage: 85000,
    transmission: 'CVT'
  },
  {
    id: '4',
    title: 'Range Rover Sport',
    price: 12500000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop',
    location: 'Abuja, Nigeria',
    year: 2021,
    mileage: 28000,
    transmission: 'Automatic'
  }
]
</script>

<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Featured Vehicles</h2>
          <p class="text-gray-500 dark:text-gray-400 mt-1">Hand-picked selection just for you</p>
        </div>
        <UButton variant="outline" to="/listings" trailing-icon="i-heroicons-arrow-right">
          View All Listings
        </UButton>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product"
          @click="navigateTo(`/product/${product.id}`)"
        />
      </div>
    </div>
  </section>
</template>
