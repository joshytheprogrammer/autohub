<script setup >
defineProps({
  product: {
    title: '',
    price: 0,
    location: '',
    postedAt: '',
    seller: {
      name: '',
      type:'',
      rating: 4,
      verified: false
    }
  }
})

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(value)
}
</script>

<template>
  <UCard class="sticky top-4">
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ product.title }}</h1>
        <p class="text-3xl font-bold text-primary-600 dark:text-primary-400">{{ formatCurrency(product.price) }}</p>
      </div>

      <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
        <UIcon name="i-heroicons-map-pin" />
        <span>{{ product.location }}</span>
        <span>•</span>
        <span>Posted {{ product.postedAt }}</span>
      </div>

      <USeparator />

      <!-- Seller Info -->
      <div class="flex items-center gap-4">
        <UAvatar :alt="product.seller.name" size="lg" />
        <div class="flex-1">
          <div class="flex items-center gap-2">
            <h3 class="font-semibold">{{ product.seller.name }}</h3>
            <UBadge v-if="product.seller.verified" color="blue" variant="subtle" size="xs">Verified</UBadge>
          </div>
          <p class="text-sm text-gray-500">{{ product.seller.type }} • {{ product.seller.rating }} ★</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <UButton block size="lg" color="primary" icon="i-heroicons-phone">Show Contact</UButton>
        <UButton block size="lg" color="green" variant="soft" icon="i-heroicons-chat-bubble-left-right">Chat</UButton>
      </div>
    </div>
  </UCard>
</template>
