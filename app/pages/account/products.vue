<script setup>
definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

const listings = ref([
  {
    id: 1,
    title: '2020 Tesla Model 3 Long Range',
    price: 35000,
    status: 'Active',
    views: 124,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2023-10-15'
  },
  {
    id: 2,
    title: '2018 BMW M4 Competition',
    price: 52000,
    status: 'Pending',
    views: 89,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2023-10-10'
  },
  {
    id: 3,
    title: '2015 Ford Mustang GT',
    price: 28500,
    status: 'Sold',
    views: 450,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2023-09-28'
  }
])

const getStatusColor = (status) => {
  switch (status) {
    case 'Active': return 'green'
    case 'Pending': return 'orange'
    case 'Sold': return 'gray'
    default: return 'gray'
  }
}

const items = (row) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    class: 'text-red-500 dark:text-red-400'
  }]
]
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
          <UButton to="/account/products" block variant="soft" color="primary" class="justify-start" icon="i-heroicons-list-bullet">My Listings</UButton>
          <UButton to="/account/messages" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-chat-bubble-left-right">Messages</UButton>
          <UButton to="/account/saved" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-heart">Saved Cars</UButton>
          <UButton to="/account/settings" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-cog-6-tooth">Settings</UButton>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 space-y-6">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">My Listings</h1>
          <UButton to="/sell" icon="i-heroicons-plus">Add New</UButton>
        </div>

        <div class="space-y-4">
          <UCard v-for="listing in listings" :key="listing.id" :ui="{ body: { padding: 'p-0 sm:p-0' } }">
            <div class="flex flex-col sm:flex-row">
              <div class="w-full sm:w-48 h-48 sm:h-auto relative">
                <img :src="listing.image" :alt="listing.title" class="w-full h-full object-cover sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none" />
                <div class="absolute top-2 left-2">
                  <UBadge :color="getStatusColor(listing.status)">{{ listing.status }}</UBadge>
                </div>
              </div>
              
              <div class="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <div class="flex justify-between items-start">
                    <h3 class="text-lg font-semibold hover:text-primary-500 cursor-pointer">
                      <NuxtLink :to="`/product/${listing.id}`">{{ listing.title }}</NuxtLink>
                    </h3>
                    <UDropdownMenu :items="items(listing)" :popper="{ placement: 'bottom-end' }">
                      <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-vertical-20-solid" />
                    </UDropdownMenu>
                  </div>
                  <p class="text-xl font-bold mt-1">${{ listing.price.toLocaleString() }}</p>
                  <p class="text-sm text-gray-500 mt-2">Listed on {{ listing.date }}</p>
                </div>

                <div class="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <UIcon name="i-heroicons-eye" />
                    <span>{{ listing.views }} views</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <UIcon name="i-heroicons-chat-bubble-left" />
                    <span>3 inquiries</span>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </main>
    </div>
  </div>
</template>
