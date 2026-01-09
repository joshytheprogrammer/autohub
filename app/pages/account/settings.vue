<script setup>
definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()
const toast = useToast()

const profileForm = reactive({
  name: auth.user?.name || 'Test User',
  email: auth.user?.email || 'test@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: 'Car enthusiast and collector.'
})

const passwordForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const notifications = reactive({
  email: {
    marketing: true,
    messages: true,
    updates: false
  },
  push: {
    messages: true,
    priceAlerts: true
  }
})

const loading = ref(false)

const updateProfile = async () => {
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false
  toast.add({ title: 'Profile updated', description: 'Your profile information has been saved.', color: 'green' })
}

const updatePassword = async () => {
  if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    toast.add({ title: 'Error', description: 'Passwords do not match.', color: 'red' })
    return
  }
  
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false
  
  passwordForm.currentPassword = ''
  passwordForm.newPassword = ''
  passwordForm.confirmPassword = ''
  
  toast.add({ title: 'Password updated', description: 'Your password has been changed successfully.', color: 'green' })
}
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
          <UButton to="/account/products" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-list-bullet">My Listings</UButton>
          <UButton to="/account/messages" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-chat-bubble-left-right">Messages</UButton>
          <UButton to="/account/saved" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-heart">Saved Cars</UButton>
          <UButton to="/account/settings" block variant="soft" color="primary" class="justify-start" icon="i-heroicons-cog-6-tooth">Settings</UButton>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 space-y-6">
        <h1 class="text-2xl font-bold">Settings</h1>

        <UTabs :items="[{ label: 'Profile', slot: 'profile' }, { label: 'Password', slot: 'password' }, { label: 'Notifications', slot: 'notifications' }]">
          <template #profile>
            <UCard class="mt-4">
              <template #header>
                <h3 class="font-semibold">Profile Information</h3>
                <p class="text-sm text-gray-500">Update your account's profile information and email address.</p>
              </template>

              <form @submit.prevent="updateProfile" class="space-y-6">
                <div class="flex items-center gap-4">
                  <UAvatar :src="auth.user?.avatar" :alt="auth.user?.name" size="xl" />
                  <UButton color="white" variant="solid" size="sm">Change Avatar</UButton>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UFormField label="Full Name">
                    <UInput v-model="profileForm.name" icon="i-heroicons-user" />
                  </UFormField>
                  
                  <UFormField label="Email Address">
                    <UInput v-model="profileForm.email" type="email" icon="i-heroicons-envelope" />
                  </UFormField>
                  
                  <UFormField label="Phone Number">
                    <UInput v-model="profileForm.phone" type="tel" icon="i-heroicons-phone" />
                  </UFormField>
                  
                  <UFormField label="Location">
                    <UInput v-model="profileForm.location" icon="i-heroicons-map-pin" />
                  </UFormField>
                </div>
                
                <UFormField label="Bio">
                  <UTextarea v-model="profileForm.bio" :rows="4" placeholder="Tell us a little about yourself..." />
                </UFormField>

                <div class="flex justify-end">
                  <UButton type="submit" :loading="loading">Save Changes</UButton>
                </div>
              </form>
            </UCard>
          </template>

          <template #password>
            <UCard class="mt-4">
              <template #header>
                <h3 class="font-semibold">Change Password</h3>
                <p class="text-sm text-gray-500">Ensure your account is using a long, random password to stay secure.</p>
              </template>

              <form @submit.prevent="updatePassword" class="space-y-6 max-w-md">
                <UFormField label="Current Password">
                  <UInput v-model="passwordForm.currentPassword" type="password" icon="i-heroicons-lock-closed" />
                </UFormField>
                
                <UFormField label="New Password">
                  <UInput v-model="passwordForm.newPassword" type="password" icon="i-heroicons-lock-closed" />
                </UFormField>
                
                <UFormField label="Confirm New Password">
                  <UInput v-model="passwordForm.confirmPassword" type="password" icon="i-heroicons-lock-closed" />
                </UFormField>

                <div class="flex justify-end">
                  <UButton type="submit" :loading="loading">Update Password</UButton>
                </div>
              </form>
            </UCard>
          </template>

          <template #notifications>
            <UCard class="mt-4">
              <template #header>
                <h3 class="font-semibold">Notifications</h3>
                <p class="text-sm text-gray-500">Manage how you receive notifications.</p>
              </template>

              <div class="space-y-6">
                <div>
                  <h4 class="font-medium mb-4">Email Notifications</h4>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-sm">Marketing emails</p>
                        <p class="text-xs text-gray-500">Receive emails about new products, features, and more.</p>
                      </div>
                      <USwitch v-model="notifications.email.marketing" />
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-sm">Message notifications</p>
                        <p class="text-xs text-gray-500">Receive emails when you get a new message.</p>
                      </div>
                      <USwitch v-model="notifications.email.messages" />
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-sm">Account updates</p>
                        <p class="text-xs text-gray-500">Receive emails about your account activity.</p>
                      </div>
                      <USwitch v-model="notifications.email.updates" />
                    </div>
                  </div>
                </div>

                <UDivider />

                <div>
                  <h4 class="font-medium mb-4">Push Notifications</h4>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-sm">New messages</p>
                        <p class="text-xs text-gray-500">Get notified when you receive a new message.</p>
                      </div>
                      <USwitch v-model="notifications.push.messages" />
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-sm">Price alerts</p>
                        <p class="text-xs text-gray-500">Get notified when a saved car's price drops.</p>
                      </div>
                      <USwitch v-model="notifications.push.priceAlerts" />
                    </div>
                  </div>
                </div>
              </div>
            </UCard>
          </template>
        </UTabs>
      </main>
    </div>
  </div>
</template>
