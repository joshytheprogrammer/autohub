<script setup>
definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

const stats = [
  { label: 'Active Listings', value: '3', icon: 'i-heroicons-truck' },
  { label: 'Total Views', value: '1,234', icon: 'i-heroicons-eye' },
  { label: 'Messages', value: '12', icon: 'i-heroicons-chat-bubble-left-right' },
  { label: 'Saved Cars', value: '8', icon: 'i-heroicons-heart' },
]

const recentActivity = [
  { id: 1, type: 'view', message: 'Your listing "2020 Tesla Model 3" was viewed 45 times today.', time: '2 hours ago' },
  { id: 2, type: 'message', message: 'New message from John Doe regarding "2018 BMW M4".', time: '5 hours ago' },
  { id: 3, type: 'system', message: 'Your listing "2015 Ford Mustang" has been approved.', time: '1 day ago' },
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
          <UButton to="/account" block variant="soft" color="primary" class="justify-start" icon="i-heroicons-home">Dashboard</UButton>
          <UButton to="/account/products" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-list-bullet">My Listings</UButton>
          <UButton to="/account/messages" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-chat-bubble-left-right">Messages</UButton>
          <UButton to="/account/saved" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-heart">Saved Cars</UButton>
          <UButton to="/account/settings" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-cog-6-tooth">Settings</UButton>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 space-y-6">
        <h1 class="text-2xl font-bold">Dashboard</h1>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <UCard v-for="stat in stats" :key="stat.label">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500">{{ stat.label }}</p>
                <p class="text-2xl font-bold mt-1">{{ stat.value }}</p>
              </div>
              <UIcon :name="stat.icon" class="w-8 h-8 text-primary-500 opacity-80" />
            </div>
          </UCard>
        </div>

        <!-- Recent Activity -->
        <UCard>
          <template #header>
            <h3 class="font-semibold">Recent Activity</h3>
          </template>
          
          <div class="space-y-4">
            <div v-for="activity in recentActivity" :key="activity.id" class="flex gap-4 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
              <div class="mt-1">
                <div class="w-2 h-2 rounded-full bg-primary-500"></div>
              </div>
              <div>
                <p class="text-sm text-gray-900 dark:text-white">{{ activity.message }}</p>
                <p class="text-xs text-gray-500 mt-1">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </UCard>
      </main>
    </div>
  </div>
</template>
