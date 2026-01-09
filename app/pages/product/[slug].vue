<script setup>
const route = useRoute()
const slug = route.params.slug

// Mock Data
const product = {
  id: slug,
  title: 'Toyota Land Cruiser Prado TX-L',
  price: 8500000,
  location: 'Abuja, Kilimani',
  postedAt: '2 days ago',
  description: 'Pristine condition Toyota Land Cruiser Prado. One owner since new. Full service history available. Features include leather seats, sunroof, 7-seater, diesel engine, and more. Serious buyers only.',
  images: [
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200&auto=format&fit=crop'
  ],
  specs: {
    make: 'Toyota',
    model: 'Land Cruiser Prado',
    year: 2020,
    mileage: '45,000 km',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    engineSize: '2800cc',
    color: 'Pearl White',
    bodyType: 'SUV',
    condition: 'Foreign Used',
    driveTrain: '4WD'
  },
  seller: {
    name: 'Premium Auto Dealers',
    type: 'Dealer',
    rating: 4.8,
    verified: true
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Breadcrumb -->
    <div class="mb-6 text-sm text-gray-500">
      <NuxtLink to="/" class="hover:text-primary-500">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/listings" class="hover:text-primary-500">Listings</NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-gray-900 dark:text-white">{{ product.title }}</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Column: Gallery & Details -->
      <div class="lg:col-span-2 space-y-8">
        <ImageGallery :images="product.images" />

        <div class="space-y-6">
          <section>
            <h2 class="text-xl font-bold mb-4">Vehicle Specifications</h2>
            <SpecsList :specs="product.specs" />
          </section>

          <USeparator />

          <section>
            <h2 class="text-xl font-bold mb-4">Description</h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ product.description }}
            </p>
          </section>
        </div>
      </div>

      <!-- Right Column: Summary Card -->
      <div class="lg:col-span-1">
        <ProductSummaryCard :product="product" />
      </div>
    </div>

    <!-- Related Products -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold mb-6">Similar Vehicles</h2>
      <FeaturedProductsGrid />
    </div>
  </div>
</template>
