<script setup>
const auth = useAuthStore()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)

const handleSignup = async () => {
  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match')
    return
  }
  
  loading.value = true
  try {
    await auth.register(form)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
    <UCard class="w-full max-w-md space-y-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Create an account</h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Join AutoHub to buy and sell cars
        </p>
      </div>

      <form class="space-y-6" @submit.prevent="handleSignup">
        <UFormField label="Full Name">
          <UInput v-model="form.name" type="text" autocomplete="name" required icon="i-heroicons-user" />
        </UFormField>

        <UFormField label="Email address">
          <UInput v-model="form.email" type="email" autocomplete="email" required icon="i-heroicons-envelope" />
        </UFormField>

        <UFormField label="Password">
          <UInput v-model="form.password" type="password" autocomplete="new-password" required icon="i-heroicons-lock-closed" />
        </UFormField>

        <UFormField label="Confirm Password">
          <UInput v-model="form.confirmPassword" type="password" autocomplete="new-password" required icon="i-heroicons-lock-closed" />
        </UFormField>

        <div class="flex items-center">
          <UCheckbox required label="I agree to the Terms of Service and Privacy Policy" />
        </div>

        <UButton type="submit" block size="lg" :loading="loading">
          Create account
        </UButton>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <NuxtLink to="/auth/login" class="font-medium text-primary-600 hover:text-primary-500">Sign in</NuxtLink>
      </p>
    </UCard>
  </div>
</template>
