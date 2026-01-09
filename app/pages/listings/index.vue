<script setup >
const route = useRoute()
const router = useRouter()

const page = ref(1)
const itemsPerPage = 12

// Mock data generator
const generateProducts = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    title: ['Toyota Land Cruiser Prado', 'Mercedes C200', 'Subaru Outback', 'Nissan X-Trail', 'Honda CR-V', 'Mazda CX-5', 'Volkswagen Touareg', 'Audi Q7'][Math.floor(Math.random() * 8)],
    price: Math.floor(Math.random() * 10000000) + 1500000,
    image: [
      'https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop'
    ][Math.floor(Math.random() * 6)],
    location: ['Abuja', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'][Math.floor(Math.random() * 5)],
    year: Math.floor(Math.random() * 10) + 2014,
    mileage: Math.floor(Math.random() * 100000),
    transmission: ['Automatic', 'Manual', 'CVT'][Math.floor(Math.random() * 3)]
  }))
}

const products = ref(generateProducts(12))
const totalItems = 124 // Mock total

const isOpen = ref(false) // For mobile filter drawer
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Sidebar Filters (Desktop) -->
      <aside class="hidden lg:block w-64 shrink-0">
        <div class="sticky top-4">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-bold">Filters</h2>
            <UButton variant="ghost" color="neutral" size="xs">Reset</UButton>
          </div>
          <SidebarFilters />
        </div>
      </aside>

      <!-- Mobile Filter Button -->
      <div class="lg:hidden mb-4">
        <UButton icon="i-heroicons-adjustments-horizontal" block @click="isOpen = true" color="neutral" variant="outline">
          Filters
        </UButton>
      </div>

      <!-- Mobile Filter Drawer -->
      <USlideover v-model:open="isOpen" title="Filters">
        <template #body>
          <SidebarFilters />
        </template>
        <template #footer>
          <UButton block color="primary" @click="isOpen = false">Show Results</UButton>
        </template>
      </USlideover>

      <!-- Main Content -->
      <div class="flex-1">
        <div class="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 class="text-2xl font-bold">All Listings <span class="text-gray-500 text-base font-normal">({{ totalItems }} cars)</span></h1>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
            <USelect :items="['Newest', 'Price: Low to High', 'Price: High to Low', 'Mileage: Low to High']" placeholder="Sort" class="w-48" />
          </div>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <ProductCard 
            v-for="product in products" 
            :key="product.id" 
            :product="product"
            @click="navigateTo(`/product/${product.id}`)"
          />
        </div>

        <!-- Pagination -->
        <div class="flex justify-center">
          <UPagination v-model:page="page" :total="totalItems" :items-per-page="itemsPerPage" />
        </div>
      </div>
    </div>
  </div>
</template>
