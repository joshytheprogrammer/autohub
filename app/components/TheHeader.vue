<script setup>
const auth = useAuthStore()
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const userDropdownItems = [
  [{
    label: 'Profile',
    avatar: {
      src: auth.user?.avatar || 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
    to: '/account'
  }],
  [{
    label: 'My Listings',
    icon: 'i-heroicons-list-bullet',
    to: '/account/products'
  }, {
    label: 'Messages',
    icon: 'i-heroicons-chat-bubble-left-right',
    to: '/account/messages'
  }, {
    label: 'Saved',
    icon: 'i-heroicons-heart',
    to: '/account/saved'
  }],
  [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth',
    to: '/account/settings'
  }],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => auth.logout()
  }]
]
</script>

<template>
  <header class="border-b border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/75 backdrop-blur sticky top-0 z-50">
    <UContainer class="flex items-center justify-between h-16">
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="flex items-center gap-2">
          <UIcon name="i-heroicons-truck" class="w-8 h-8 text-primary-500" />
          <span class="text-xl font-bold text-gray-900 dark:text-white">AutoHub</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink to="/listings" class="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            Buy
          </NuxtLink>
          <NuxtLink to="/sell" class="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            Sell
          </NuxtLink>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <UButton
          :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />

        <template v-if="auth.isLoggedIn">
          <UDropdownMenu :items="userDropdownItems" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-end' }">
            <UAvatar :src="auth.user?.avatar" :alt="auth.user?.name" />

            <template #account="{ item }">
              <div class="text-left">
                <p>Signed in as</p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                  {{ item.label }}
                </p>
              </div>
            </template>

            <template #item="{ item }">
              <span class="truncate">{{ item.label }}</span>
              <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
            </template>
          </UDropdownMenu>
        </template>
        <template v-else>
          <UButton to="/auth/login" variant="ghost" color="gray">
            Log in
          </UButton>
          <UButton to="/auth/signup" color="primary">
            Sign up
          </UButton>
        </template>
      </div>
    </UContainer>
  </header>
</template>
