<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold mb-2">Sell Your Car</h1>
      <p class="text-gray-500">List your vehicle in 3 easy steps and reach thousands of buyers.</p>
    </div>
    
    <ProductForm />
  </div>
</template>
