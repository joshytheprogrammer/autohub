<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div class="min-h-screen bg-default">
    <!-- Header -->
    <div class="bg-elevated border-b border-gray-200 dark:border-gray-800 py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-highlighted mb-3">Sell Your Vehicle</h1>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          Create your listing in minutes. Reach thousands of potential buyers and get the best price for your car.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-8">
      <ProductForm />
    </div>
  </div>
</template>
