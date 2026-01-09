<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
    <UContainer class="py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-truck" class="w-6 h-6 text-primary-500" />
            <span class="text-lg font-bold text-gray-900 dark:text-white">AutoHub</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            The most trusted marketplace for buying and selling vehicles in Africa.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Marketplace</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><NuxtLink to="/listings" class="hover:text-primary-500">Browse Cars</NuxtLink></li>
            <li><NuxtLink to="/sell" class="hover:text-primary-500">Sell Your Car</NuxtLink></li>
            <li><NuxtLink to="/listings?condition=new" class="hover:text-primary-500">New Arrivals</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><NuxtLink to="/about" class="hover:text-primary-500">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-primary-500">Contact</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-primary-500">Terms of Service</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:text-primary-500">Privacy Policy</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
          <div class="flex gap-4">
            <UButton icon="i-simple-icons-facebook" color="gray" variant="ghost" to="#" target="_blank" />
            <UButton icon="i-simple-icons-twitter" color="gray" variant="ghost" to="#" target="_blank" />
            <UButton icon="i-simple-icons-instagram" color="gray" variant="ghost" to="#" target="_blank" />
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} AutoHub. All rights reserved.
      </div>
    </UContainer>
  </footer>
</template>
