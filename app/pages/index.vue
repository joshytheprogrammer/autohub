<template>
  <div>
    <HeroSearch />
    <CategoryTiles />
    <FeaturedProductsGrid />
    
    <!-- Call to Action Section -->
    <section class="py-16 bg-primary-600 dark:bg-primary-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to sell your car?</h2>
        <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied sellers on AutoHub. List your vehicle in minutes and reach millions of potential buyers across Africa.
        </p>
        <div class="flex justify-center gap-4">
          <UButton size="xl" color="white" variant="solid" to="/sell" class="text-primary-600 font-bold">
            Sell My Car
          </UButton>
          <UButton size="xl" color="white" variant="outline" to="/auth/signup" class="text-white border-white hover:bg-white/10">
            Create Dealer Account
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>
