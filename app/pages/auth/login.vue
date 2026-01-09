<script setup>
const auth = useAuthStore()

const form = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const showPassword = ref(false)
const rememberMe = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    await auth.login(form)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Left side - Branding / Image -->
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div class="relative z-10 flex flex-col justify-between p-12 text-white">
        <div>
          <NuxtLink to="/" class="flex items-center gap-3">
            <UIcon name="i-lucide-car" class="size-10" />
            <span class="text-2xl font-bold">AutoHub</span>
          </NuxtLink>
        </div>
        
        <div class="space-y-6">
          <h1 class="text-4xl font-bold leading-tight">
            Find your perfect<br />vehicle today
          </h1>
          <p class="text-lg text-primary-100 max-w-md">
            Join thousands of buyers and sellers on the most trusted automotive marketplace.
          </p>
          <div class="flex items-center gap-8 pt-4">
            <div class="text-center">
              <div class="text-3xl font-bold">50K+</div>
              <div class="text-sm text-primary-200">Active Listings</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold">10K+</div>
              <div class="text-sm text-primary-200">Happy Customers</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold">99%</div>
              <div class="text-sm text-primary-200">Satisfaction</div>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex -space-x-3">
            <UAvatar
              src="https://i.pravatar.cc/150?img=1"
              size="sm"
              class="ring-2 ring-primary-700"
            />
            <UAvatar
              src="https://i.pravatar.cc/150?img=2"
              size="sm"
              class="ring-2 ring-primary-700"
            />
            <UAvatar
              src="https://i.pravatar.cc/150?img=3"
              size="sm"
              class="ring-2 ring-primary-700"
            />
          </div>
          <p class="text-sm text-primary-100">
            <span class="font-semibold text-white">2,500+</span> people joined this month
          </p>
        </div>
      </div>
    </div>

    <!-- Right side - Login Form -->
    <div class="flex-1 flex items-center justify-center p-6 sm:p-12 bg-default">
      <div class="w-full max-w-md space-y-8">
        <!-- Mobile Logo -->
        <div class="lg:hidden text-center mb-8">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-primary">
            <UIcon name="i-lucide-car" class="size-8" />
            <span class="text-xl font-bold">AutoHub</span>
          </NuxtLink>
        </div>

        <!-- Header -->
        <div class="text-center lg:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-highlighted">
            Welcome back
          </h2>
          <p class="mt-2 text-muted">
            Sign in to your account to continue browsing and selling vehicles
          </p>
        </div>

        <!-- Form -->
        <form class="space-y-5" @submit.prevent="handleLogin">
          <UFormField label="Email address" size="lg">
            <UInput
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              autocomplete="email"
              required
              icon="i-lucide-mail"
              size="lg"
              class="w-full"
            />
          </UFormField>

          <UFormField label="Password" size="lg">
            <UInput
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your password"
              autocomplete="current-password"
              required
              icon="i-lucide-lock"
              size="lg"
              class="w-full"
              :ui="{ trailing: 'pe-1' }"
            >
              <template #trailing>
                <UButton
                  color="neutral"
                  variant="link"
                  size="sm"
                  :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                  :aria-label="showPassword ? 'Hide password' : 'Show password'"
                  @click="showPassword = !showPassword"
                />
              </template>
            </UInput>
          </UFormField>

          <div class="flex items-center justify-between">
            <UCheckbox v-model="rememberMe" label="Remember me" />
            <NuxtLink
              to="/auth/forgot-password"
              class="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Forgot password?
            </NuxtLink>
          </div>

          <UButton
            type="submit"
            block
            size="xl"
            :loading="loading"
            class="mt-6"
            icon="i-lucide-log-in"
            trailing
          >
            Sign in
          </UButton>
        </form>

        <!-- Divider -->
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <USeparator />
          </div>
          <div class="relative flex justify-center">
            <span class="bg-default px-4 text-sm text-muted">Or continue with</span>
          </div>
        </div>

        <!-- Social Login -->
        <div class="grid grid-cols-2 gap-4">
          <UButton
            block
            color="neutral"
            variant="outline"
            size="lg"
            class="hover:bg-elevated transition-colors"
          >
            <template #leading>
              <svg class="size-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </template>
            Google
          </UButton>
          <UButton
            block
            color="neutral"
            variant="outline"
            size="lg"
            class="hover:bg-elevated transition-colors"
          >
            <template #leading>
              <svg class="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </template>
            Facebook
          </UButton>
        </div>

        <!-- Sign up link -->
        <p class="text-center text-sm text-muted pt-4">
          Don't have an account?
          <NuxtLink
            to="/auth/signup"
            class="font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Create one now
          </NuxtLink>
        </p>

        <!-- Terms -->
        <p class="text-center text-xs text-muted">
          By signing in, you agree to our
          <NuxtLink to="/terms" class="underline hover:text-default">Terms of Service</NuxtLink>
          and
          <NuxtLink to="/privacy" class="underline hover:text-default">Privacy Policy</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
